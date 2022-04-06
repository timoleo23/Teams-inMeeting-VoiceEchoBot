// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

/**
 * This component is used to store meeting and conversation context.
 */
class MeetingInfoRepository {
    constructor(name, year) {
        this.conversationReferences = {};
        this.meetingContexts = {};
    }

    setConversationReference(conversationReference) {
        console.log("setConversationReference: ");
        this.conversationReferences[conversationReference.conversation.id] = conversationReference;
        console.log(this.conversationReferences[conversationReference.conversation.id]);
    }

    getConversationReference(conversationId) {
        console.log("Trying to get Conversation with ID: ", conversationId);
        console.log(this.conversationReferences[conversationId]);
        return this.conversationReferences[conversationId];
    }

    setMeetingContext(meetingId, context) {
        console.log('setMeetingContext')
        // console.log('meetingId', meetingId)

        this.meetingContexts[meetingId] = context;
        console.log("Update meeting context: ", Object.keys(this.meetingContexts));

        // console.log("Context Info:");
        // console.log(this.meetingContexts[meetingId]);
    }

    getMeetingContext(meetingId) {
        console.log("Trying to get context with ID: ", meetingId);
        // console.log(this.meetingContexts[meetingId]);
        return this.meetingContexts[meetingId];
    }
}

// Export singleton
module.exports = new MeetingInfoRepository();