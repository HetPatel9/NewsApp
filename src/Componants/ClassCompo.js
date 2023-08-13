import React, { Component } from 'react';
import Usercard from './Usercard';
import Loading from './Loading';
import PropTypes from 'prop-types';

export default class ClassCompo extends Component {
  capitlize = (str) => {
    return str[0].toUpperCase() + str.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: 1,
      loading: true
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
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=597e3e5a8b3f4d3f94ac480aeee94baa&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    const data = await fetch(url);
    const jsonData = await data.json();
    this.setState({
      data: jsonData.articles,
      loading: false
    });
  }

  async componentDidMount() {
    this.getNews();
  }

  previousPage = async () => {
    this.setState({ page: this.state.page - 1 });
    this.getNews();
  };

  nextPage = async () => {
    this.setState({ page: this.state.page + 1 });
    this.getNews();
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className="text-center">
            {this.capitlize(this.props.category)} Top Hedlines- NewsRoom
          </h1>
          {this.state.loading && <Loading />}
          <div className="row">
            {!this.state.loading &&
              this.state.data.map((element) => {
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
          <div className="d-flex justify-content-between">
            <button
              type="button"
              disabled={this.state.page <= 1}
              className="btn btn-primary"
              onClick={this.previousPage}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              className="btn btn-primary"
              onClick={this.nextPage}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}
