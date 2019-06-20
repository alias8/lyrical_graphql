// import gql from "graphql-tag";
// import React from "react";
// import { ChildDataProps, graphql } from "react-apollo";
//
// const HERO_QUERY = gql`
//     query GetCharacter($episode: Episode!) {
//         hero(episode: $episode) {
//             name
//             id
//             friends {
//                 name
//                 id
//                 appearsIn
//             }
//         }
//     }
// `;
//
// interface Hero {
//   name: string;
//   id: string;
//   appearsIn: string[];
//   friends: Hero[];
// }
//
// interface Response {
//   hero: Hero;
// }
//
// interface InputProps {
//   episode: string
// }
//
// type ChildProps = ChildDataProps<InputProps, Response>;
//
// const withCharacter = graphql<InputProps, Response>(HERO_QUERY, {
//   options: ({ episode }) => ({
//     variables: { episode }
//   })
// });
//
// class Character extends React.Component<ChildProps, {}> {
//   public render() {
//     const { loading, hero, error } = this.props.data;
//     if (loading) {
//       return <div>Loading</div>;
//     }
//     if (error) {
//       return <h1>ERROR</h1>;
//     }
//     return (
//       <div>
//         {hero && hero.name}
//       </div>
//     );
//   }
// }
//
// export default withCharacter(Character);
