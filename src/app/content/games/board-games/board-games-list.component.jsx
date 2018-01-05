import React, { Fragment } from "react"
import SelectableList from "../../../commons/SelectableList";
import PropTypes from "prop-types";
import { Card, ListItem } from "material-ui";

const BoardGameList = (props) => {

    const children = props.games
        ? props.games.map((game) => (
            <ListItem primaryText={game.name} value={game.id} key={game.id} className="game-list-item"/>))
        : <Fragment/>;

    const selectItem = (id) => {
        const game = props.games.find(game => game.id === id);
        props.onSelect(game);
    };

    return (
        <Card>
            <SelectableList selectedValue={props.startId} onChange={selectItem}>
                {children}
            </SelectableList>
        </Card>)
};

BoardGameList.propTypes = {
    games: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    })),
    onSelect: PropTypes.func.isRequired,
    startId: PropTypes.number,
};


export default BoardGameList;