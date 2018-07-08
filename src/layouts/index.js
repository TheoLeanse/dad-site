import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import './all.sass';

export const TemplateWrapper = ({ children, data }) => {
	const { edges: poems } = data.allMarkdownRemark;
	const collections = poems.reduce(
		(result, { node: poem }) => result.concat(poem.frontmatter.tags),
		[]
	);
	return (
		<div>
			<Helmet title="Robin Leanse" />
			<Navbar collections={collections} />
			<div>{children()}</div>
		</div>
	);
};

TemplateWrapper.propTypes = {
	children: PropTypes.func
};

export default TemplateWrapper;

// replace with query to get all tags / collection names
export const pageQuery = graphql`
	query LayoutQuery {
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date] }
			filter: { frontmatter: { templateKey: { eq: "poem" } } }
		) {
			edges {
				node {
					frontmatter {
						tags
					}
				}
			}
		}
	}
`;
