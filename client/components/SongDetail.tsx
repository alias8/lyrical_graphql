import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import {
  GetCommentsComponent,
  GetSongComponent,
  OnCommentAddedComponent
} from "../../server/generated/types";
import { LyricCreate } from "./LyricCreate";
import { LyricList } from "./LyricList";

type IProps = RouteComponentProps<{ id: string }>;

// tslint:disable:no-shadowed-variable
export class SongDetail extends React.Component<IProps> {
  public render() {
    const { match } = this.props;
    return (
      <>
        <GetSongComponent skip={false} variables={{ id: match.params.id }}>
          {({ data, error, loading }) => {
            if (error || loading) {
              return "...";
            }
            if (data && data.song) {
              return (
                <div>
                  <Link to={"/"}>Back</Link>
                  <h3>{data.song.title}</h3>
                  {data.song.lyrics && <LyricList lyrics={data.song.lyrics} />}
                  <LyricCreate songId={match.params.id} />
                  <OnCommentAddedComponent
                    onSubscriptionData={options => {
                      const a = 2;
                    }}
                  >
                    {({ data, loading, error }) => (
                      <h4>New comment: {!loading}</h4>
                    )}
                  </OnCommentAddedComponent>
                  <CommentsBox />
                </div>
              );
            }
          }}
        </GetSongComponent>
      </>
    );
  }
}

const CommentsBox = () => {
  return (
    <GetCommentsComponent skip={false} variables={{}}>
      {({ data, error, loading }) => {
        if (error || loading) {
          return "...";
        }
        if (data && data.comments) {
          return (
            <ul>
              {data.comments.map(comment => {
                return <li key={comment!.id!}>{comment!.content}</li>;
              })}
            </ul>
          );
        }
      }}
    </GetCommentsComponent>
  );
};
