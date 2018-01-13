import React, { Component } from "react"
import gql from "graphql-tag"
import { graphql } from "react-apollo"

export class PeopleList extends Component {
  render() {
    const { data: { loading, error, getPeople } } = this.props
    if (loading) {
      return <p>Loading...</p>
    } else if (error) {
      return <p>Error!</p>
    } else {
      return <ul>{getPeople.map(({ name }) => <li key={name}>{name}</li>)}</ul>
    }
  }
}

const PeopleListWithData = graphql(
  gql`
    {
      getPeople {
        name
      }
    }
  `,
  { options: { notifyOnNetworkStatusChange: true } }
)(PeopleList)

export default PeopleListWithData
