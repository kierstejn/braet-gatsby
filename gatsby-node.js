exports.onCreateWebpackConfig = ({ stage, actions }) => {
	if (stage === 'develop') {
		actions.setWebpackConfig({
			devtool: 'cheap-module-source-map'
		});
	}
};

exports.onCreatePage = ({ page, actions }) => {
	const { createPage, deletePage } = actions
	deletePage(page)
	createPage({
	  ...page,
	  context: {
		...page.context,
		currentDate: getCurrentDate(),
	  },
	})
  }

  exports.setFieldsOnGraphQLNodeType = ({ type }) => {
	if (type.name === `EventsJson`) {
	  return {
		starttimestamp: {
		  type: "Float",
		  resolve: source => {
			return new Date(source.starttime).getTime(); 
		  }
	   }
	 };
	}
	return {};
  };

  function getCurrentDate() {
	const d = new Date().getTime()
	return d
  }