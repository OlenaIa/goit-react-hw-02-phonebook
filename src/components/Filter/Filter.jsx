import { LabelStyle, InputStyle } from 'components/App.styled';
import PropTypes from 'prop-types'

export const Filter = ({ filter, onChangeFilter }) => (
    <LabelStyle>
        Find contacts by name:
        <InputStyle
            type="text"
            name="filter"
            value={filter}
            title="Enter the name"
            required
            onChange={onChangeFilter}
        />
    </LabelStyle>
);

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired,
}