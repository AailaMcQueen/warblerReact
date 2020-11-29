const express = require("express");
const Router =  express.Router({mergeParams: true})

const { createMessage, getMessage, deleteMessage } = require("../handlers/messages")

Router.route("/").post(createMessage);
Router.route("/:message_id").get(getMessage)
                            .delete(deleteMessage)

module.exports = Router;