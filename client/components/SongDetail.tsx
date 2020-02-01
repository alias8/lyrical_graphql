import gql from "graphql-tag";
import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import {
  AddCommentComponent,
  GetCommentsComponent,
  GetSongComponent,
  OnCommentAddedComponent
} from "../../server/generated/types";
import { LyricCreate } from "./LyricCreate";
import { LyricList } from "./LyricList";

type IProps = RouteComponentProps<{ id: string }>;

interface IState {
  comment: string;
}

// tslint:disable:no-shadowed-variable
export class SongDetail extends React.Component<IProps, IState> {
  public state = {
    comment: ""
  };

  public render() {
    const { match } = this.props;
    const { comment } = this.state;
    return (
      <>
        <GetSongComponent skip={false} variables={{ id: match.params.id }}>
          {({ data, error, loading, subscribeToMore }) => {
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
                  {/* subscription should appear here: */}
                  {/*todo https://www.apollographql.com/docs/react/data/subscriptions/*/}
                  <OnCommentAddedComponent
                    onSubscriptionData={options => {
                      const a = 2; // todo: why isnt this working?
                    }}
                  >
                    {({ data, loading, error }) => null}
                  </OnCommentAddedComponent>
                  {/*<AddCommentComponent>*/}
                  {/*  {mutate => (*/}
                  {/*    <>*/}
                  {/*      <h3>Add comment:</h3>*/}
                  {/*      <form*/}
                  {/*        onSubmit={event => {*/}
                  {/*          event.preventDefault();*/}
                  {/*          mutate!({*/}
                  {/*            variables: {*/}
                  {/*              content: comment*/}
                  {/*            }*/}
                  {/*          }).then((result: any) => {*/}
                  {/*            this.setState({ comment: "" });*/}
                  {/*          });*/}
                  {/*        }}*/}
                  {/*      >*/}
                  {/*        <input*/}
                  {/*          onChange={event =>*/}
                  {/*            this.setState({ comment: event.target.value })*/}
                  {/*          }*/}
                  {/*          value={comment}*/}
                  {/*        />*/}
                  {/*      </form>*/}
                  {/*    </>*/}
                  {/*  )}*/}
                  {/*</AddCommentComponent>*/}
                  {/*<GetCommentsComponent skip={false} variables={{}}>*/}
                  {/*  {({ data, error, loading }) => {*/}
                  {/*    if (error || loading) {*/}
                  {/*      return "...";*/}
                  {/*    }*/}
                  {/*    if (data && data.comments) {*/}
                  {/*      return (*/}
                  {/*        <ul>*/}
                  {/*          {data.comments.map(comment => {*/}
                  {/*            return (*/}
                  {/*              <li key={comment!.id!}>{comment!.content}</li>*/}
                  {/*            );*/}
                  {/*          })}*/}
                  {/*        </ul>*/}
                  {/*      );*/}
                  {/*    }*/}
                  {/*  }}*/}
                  {/*</GetCommentsComponent>*/}
                </div>
              );
            }
          }}
        </GetSongComponent>
      </>
    );
  }
}
