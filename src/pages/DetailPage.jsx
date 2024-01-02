import React from "react";
import { getMovie } from "../utils/data";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';

import MovieDetail from "../components/MovieDetail";


function DetailPageWrapper () {
    const {id} = useParams(); 
    return <DetailPage id={Number(id)}/>;

}


class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie : getMovie(props.id),
        }
        console.log("Nilai dari properti ",props.id);
    }

    render(){
        if (this.state.movie === null) {
            return <p>Movie Not FOUND</p>;
        }

        return (
            <section>
                <MovieDetail {...this.state.movie}/>
            </section>
        );
    }
}

DetailPageWrapper.propTypes = {
    id : PropTypes.number.isRequired,
}

export default DetailPageWrapper;