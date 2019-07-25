import React from "react";
import {
  LikeLyricProps,
  LyricType,
  withLikeLyric
} from "../../server/generated/types";

const Like = ({ id, onLike, likes }) => {
  const like = () => {
    onLike(id, likes);
  };
  return (
    <i className={"material-icons"} onClick={like}>
      thumb_up
    </i>
  );
};

interface IOwnProps {
  lyrics: Array<LyricType | null>;
}

type IProps = IOwnProps & LikeLyricProps;

class LyricList extends React.Component<IProps> {
  public render() {
    return (
      <ul className={"collection"}>
        {this.props.lyrics.map(lyric => {
          return (
            <li key={lyric!.id!} className={"collection-item"}>
              {lyric!.content}
              <div className="vote-box">
                <Like
                  id={lyric!.id}
                  likes={lyric!.likes}
                  onLike={this.onLike}
                />
                {lyric!.likes}
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  private onLike = (id: string, likes: number) => {
    this.props.mutate!({
      variables: { id },
      optimisticResponse: {
        __typename: "Mutation",
        likeLyric: {
          id,
          __typename: "LyricType",
          likes: likes + 1
        }
      }
    });
  };
}

export default withLikeLyric<IProps>()(LyricList);
