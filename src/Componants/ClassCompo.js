import React, { useEffect, useState } from 'react';
import Usercard from './Usercard';
import Loading from './Loading';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function ClassCompo(props) {
  const capitlize = (str) => {
    return str[0].toUpperCase() + str.slice(1);
  };
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  const getNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    const newsData = await fetch(url);
    props.setProgress(40);
    const jsonData = await newsData.json();
    props.setProgress(100);
    setLoading(false);
    setData(jsonData.articles);
    setTotalResults(jsonData.totalResults);
  };

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${
      props.category
    }&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    const newsData = await fetch(url);
    const jsonData = await newsData.json();
    setData(data.concat(jsonData.articles));
    setTotalResults(jsonData.totalResults);
  };

  useEffect(() => {
    document.title = `${capitlize(props.category)} - NewsRoom`;
    getNews();
    console.log('fetched data');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1 className="text-center" style={{ margin: '30px 0px', marginTop: '80px' }}>
        {capitlize(props.category)} Top Hedlines- NewsRoom
      </h1>
      {loading && <Loading />}

      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={totalResults !== data.length}
        loader={<Loading />}
      >
        <div className="container">
          <div className="row">
            {data.map((element) => {
              return (
                <div key={element.url} className="col-md-4">
                  <Usercard
                    title={element.title ? element.title : 'not title'}
                    image={
                      element.urlToImage
                        ? element.urlToImage
                        : 'https://image.cnbcfm.com/api/v1/image/105899534-1557304890080gettyimages-859747880.jpeg?v=1691632496&w=1920&h=1080'
                    }
                    description={element.description ? element.description : 'no description'}
                    visit={element.url}
                    author={element.author}
                    publishTime={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}
ClassCompo.defaultProps = {
  country: 'in',
  category: 'general',
  pageSize: 12
};

ClassCompo.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number
};
