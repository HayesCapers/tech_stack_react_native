import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component{
	constructor(props) {
		super(props);
		
	}

	componentWillMount() {
		console.log(this.props.libraries)
		const ds = new ListView.DataSource({
			rowHasChanged: (r1,r2) => r1 !== r2
		})

		this.dataSource = ds.cloneWithRows(this.props.libraries);
		console.log(this.dataSource)
	}

	renderRow(library) {
		return <ListItem library={library} />
	}

	render() {
		console.log(this.props);
		return(
			<ListView
				dataSource={this.dataSource}
				renderRow={this.renderRow}
			/>	
		)
	}
}

function mapStateToProps(state) {
	return {
		libraries: state.libraries
	};
}

export default connect(mapStateToProps)(LibraryList);