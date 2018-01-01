import React from "react"
import SelectableList from "../../../commons/SelectableList";
import PropTypes from "prop-types";
import { Card, ListItem } from "material-ui";

const BoardGameList = (props) => {

    const children = props.games.map((game, index) => (<ListItem primaryText={game.name} value={index} key={index}/>));

    const selectItem = (index) => {
        const game = props.games[index];
        props.onSelect(game);
    };

    return (
        <Card>
            <SelectableList defaultValue={0} onChange={selectItem}>
                {children}
            </SelectableList>
        </Card>)
};

BoardGameList.propTypes = {
    games: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
    onSelect: PropTypes.func.isRequired,
};


export default BoardGameList;