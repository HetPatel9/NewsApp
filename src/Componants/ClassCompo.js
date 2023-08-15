import React, { Component } from 'react';
import Usercard from './Usercard';
import Loading from './Loading';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class ClassCompo extends Component {
  capitlize = (str) => {
    return str[0].toUpperCase() + str.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: 1,
      loading: true,
      totalResults: 0
    };
    document.title = `${this.capitlize(this.props.category)} - NewsRoom`;
  }

  static defaultProps = {
    country: 'in',
    category: 'general',
    pageSize: 12
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
  };

  async getNews() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    const data = await fetch(url);
    this.props.setProgress(40);
    const jsonData = await data.json();
    this.props.setProgress(100);

    this.setState({
      data: jsonData.articles,
      totalResults: jsonData.totalResults,
      loading: false
    });
  }

  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${
      this.props.category
    }&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({ page: this.state.page + 1 });
    const data = await fetch(url);
    const jsonData = await data.json();
    this.setState({
      data: this.state.data.concat(jsonData.articles),
      totalResults: jsonData.totalResults
    });
  };

  async componentDidMount() {
    this.getNews();
  }

  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: '30px 0px' }}>
          {this.capitlize(this.props.category)} Top Hedlines- NewsRoom
        </h1>
        {this.state.loading && <Loading />}

        <InfiniteScroll
          dataLength={this.state.data.length}
          next={this.fetchMoreData}
          hasMore={this.state.totalResults !== this.state.data.length}
          loader={<Loading />}
        >
          <div className="container">
            <div className="row">
              {this.state.data.map((element) => {
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
}
