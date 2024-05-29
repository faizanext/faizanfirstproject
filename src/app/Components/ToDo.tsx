// getAllGroupMembers= async(groupId:string)=>{
  //   const token = await getStorageData("token");
  //   const header = {
  //     "Content-Type": configJSON.apiContentType,
  //     token,
  //   };

  //   const requestMessage = new Message(
  //     getName(MessageEnum.RestAPIRequestMessage)
  //   );

  //   this.getGroupMemberApiCallId = requestMessage.messageId;

  //   requestMessage.addData(
  //     getName(MessageEnum.RestAPIResponceEndPointMessage),
  //     `${configJSON.groupMemberApiEndPoint}=${groupId}`
  //   );
  //   requestMessage.addData(
  //     getName(MessageEnum.RestAPIRequestHeaderMessage),
  //     JSON.stringify(header)
  //   );

  //   requestMessage.addData(
  //     getName(MessageEnum.RestAPIRequestMethodMessage),
  //     configJSON.apiMethodGET
  //   );

  //   runEngine.sendMessage(requestMessage.id, requestMessage);
  //   return true
  // }




  // handleGroupMemberResponse=(responseJson:{data:GroupMemberData[]},apiRequestCallId:string)=>{
  //   if(apiRequestCallId === this.getGroupMemberApiCallId){
  //     if(responseJson && responseJson.data){

  //     }
  //   }
  // }


  export interface GroupMemberData{
    "id": string,
    "type": string,
    "attributes": {
        "email": string,
        "first_name": string|null,
        "last_name": string|null,
        "user_name": string,
        "photo": string|null,
    }
  }