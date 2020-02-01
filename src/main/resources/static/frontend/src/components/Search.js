import PropTypes from 'prop-types';
import React, { useState, useCallback, useEffect } from 'react';
import qs from 'query-string';
import Input from 'components/general/Input';

const Search = ({ history }) => {
	const [query, setQuery] = useState("");
	const [timer, setTimer] = useState(undefined);

	useEffect(() => {
		setQuery(qs.parse(history.location.search)?.q ?? "");
	}, [history.location.search]);

	const onChange = useCallback(e => {
		const value = e.currentTarget.value;
		setQuery(value);
		timer && clearTimeout(timer);
		setTimer(
			setTimeout(() => {
				if ( !value ) {
					history.push({pathname: '/', search: ''});
				}
				else {
					history.push({pathname: '/', search: `?q=${value}`})
				}
			}, 700)
		);
	}, [timer, history]);

	return (
		<Input
			name="search"
			placeholder="Type to search"
			type="text"
			value={query}
			onChange={onChange}
		/>
	);
};

Search.propTypes = {
	history: PropTypes.object.isRequired
};

export default Search;