import React from "react";
import {
  LikeLyricComponent,
  LikeLyricProps,
  LyricType
} from "../../server/generated/types";

const Like = ({ id, onLike, likes, mutate }) => {
  const like = () => {
    onLike(id, likes, mutate);
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

type IProps = IOwnProps;

export class LyricList extends React.Component<IProps> {
  public render() {
    return (
      <ul className={"collection"}>
        {this.props.lyrics.map(lyric => {
          return (
            <li key={lyric!.id!} className={"collection-item"}>
              {lyric!.content}
              <div className="vote-box">
                <LikeLyricComponent
                  optimisticResponse={{
                    __typename: "Mutation",
                    likeLyric: {
                      id: lyric!.id,
                      __typename: "LyricType",
                      likes: lyric!.likes! + 1
                    }
                  }}
                >
                  {mutate => {
                    return (
                      <>
                        <Like
                          id={lyric!.id}
                          likes={lyric!.likes}
                          mutate={mutate}
                          onLike={this.onLike}
                        />
                        {lyric!.likes}
                      </>
                    );
                  }}
                </LikeLyricComponent>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  private onLike = (id: string, likes: number, mutate) => {
    mutate!({ variables: { id } });
  };
}
