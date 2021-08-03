import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // start with empty array of posts
      posts: [],
      error: '',
    };
  }

  componentDidMount() {
    // make the get request to the api endpoint
    // once the data is retrieved, we make the update to the posts property
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: 'There is an error retreiving the data' });
      });
  }

  render() {
    // once we change state, the component will re-render with GET request array data
    //since array is not empty after GET request we can render them in the browser
    // is there is an error, display the errorMsg in the browser
    const { posts, errorMsg } = this.state;
    return (
      <div>
        <h1>List of posts</h1>
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    );
  }
}

export default PostList;
