import {data} from "./data.js";
import React from "react";

export class Toolbar extends React.Component {
    render() {
        const { filters, selected, onSwitch } = this.props;

        return (
            <div className="toolbar">
                {filters.map((item) => (
                    <button
                        key={item}
                        className={`toolbar__btn ${selected === item ? "active" : ""}`}
                        onClick={() => onSwitch(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>
        );
    }
}

export class Portfolio extends React.Component {
    render() {
        const { selectedFilter } = this.props;

        const filteredData =
            selectedFilter === "All"
                ? data
                : data.filter((item) => item.category === selectedFilter);

        return (
            <div className="container">
                {filteredData.map((item, index) => (
                    <div key={index} className="container__item">
                        <img src={item.img} alt={item.category} />
                    </div>
                ))}
            </div>
        );
    }
}


export class App extends React.Component {
    state = {
        selectedFilter: "All"
    };

    handleSwitch = (filter) => {
        this.setState({ selectedFilter: filter });
    };

    render() {
        const { selectedFilter } = this.state;

        return (
            <div>
                <Toolbar
                    filters={["All", "Websites", "Flayers", "Business Cards"]}
                    selected={selectedFilter}
                    onSwitch={this.handleSwitch}
                />

                <Portfolio selectedFilter={selectedFilter} />
            </div>
        );
    }
}
