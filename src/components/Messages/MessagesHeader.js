import React, { Component } from 'react'
import { Segment, Header, Icon, Input } from 'semantic-ui-react'

export class MessagesHeader extends Component {
  render() {
    const {
      channelName,
      numUniqueUsers,
      handleSearchChange,
      searchLoading,
      isPrivateChannel,
      isChannelStarred,
      handleStar,
    } = this.props

    return (
      <Segment clearing>
        {/* Channel title */}
        <Header fluid='true' as='h2' floated='left' style={{ marginBotton: 0 }}>
          <span>
            {channelName}
            {!isPrivateChannel && (
              <Icon
                name={isChannelStarred ? 'star' : 'star outline'}
                color={isChannelStarred ? 'yellow' : 'black'}
                onClick={handleStar}
              />
            )}
          </span>
          <Header.Subheader>{numUniqueUsers}</Header.Subheader>
        </Header>
        {/* Channel search */}
        <Header floated='right'>
          <Input
            size='mini'
            icon='search'
            name='searchTerm'
            placeholder='Search Messages'
            onChange={handleSearchChange}
            loading={searchLoading}
          />
        </Header>
      </Segment>
    )
  }
}

export default MessagesHeader
