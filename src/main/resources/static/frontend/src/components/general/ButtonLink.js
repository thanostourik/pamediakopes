import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AddButtonSd = styled(Link)`
	padding: .5rem 1rem;
	text-decoration: none;
	color: ${props => props.theme.colors.secondary};
	background: ${props => props.theme.colors.button};
	border: 2px solid ${props => props.theme.colors.border};
	border-radius: 5px;
	:active {
		border: 2px solid ${props => props.theme.colors.borderFocused};
	}
`;

export default AddButtonSd;