import React from "react";
import { Link } from "react-router-dom";
import LyricCreate from "./LyricCreate";

class SongDetail extends React.Component {
  public render() {
    // const { song } = this.props.data;
    // if (!song) {
    //   return <div>loading...</div>;
    // }

    return (
      <div>
        <Link to={"/"}>Back</Link>
        {/*<h3>{song.title}</h3>*/}
        {/*<LyricCreate songId={this.props.match.params.id} />*/}
      </div>
    );
  }
}

export default SongDetail;
