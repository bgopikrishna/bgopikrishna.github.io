import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import { graphql, Link } from 'gatsby';

const Tags = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout containerType="container">
      <SEO title="Blog" />
      <div className="blog">
        <div className="pageHeader">
          <h2>Blog</h2>
        </div>
        <div className="blog-post-list">
          {posts &&
            posts.map(postNode => {
              const { frontmatter, timeToRead } = postNode.node;

              const { title, path, date, tags } = frontmatter;

              return (
                <Link key={path} to={path} className="blog-post-box">
                  <h3>{title}</h3>
                  <p>
                    {' '}
                    {tags.map(item => (
                      <>&nbsp;#{item}&nbsp;</>
                    ))}
                  </p>
                  <p
                    style={{
                      fontSize: '12px',
                      margin: '0',
                      padding: 0,
                      color: 'var(--text-color)',
                    }}>
                    {'📅'} {date} |{' ☕️' + timeToRead + ' min read'}
                  </p>
                </Link>
              );
            })}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query Tags {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
            tags
          }
          timeToRead
        }
      }
    }
  }
`;

export default Tags;