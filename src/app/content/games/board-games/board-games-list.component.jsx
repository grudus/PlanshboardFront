import React, { Component } from "react"
import SelectableList from "../../../commons/SelectableList";
import PropTypes from "prop-types";
import { Card, List, ListItem } from "material-ui";

const BoardGameList = (props) => {

    const children = props.games.map((game, index) => (<ListItem primaryText={game.name} value={index} key={index}/>));

    const printItem = (index) => console.log(index);

    return (
        <Card>
            <SelectableList defaultValue={0} onChange={printItem}>
                {children}
            </SelectableList>
        </Card>)
};

BoardGameList.propTypes = {
    games: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
};


export default BoardGameList;