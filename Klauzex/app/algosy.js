﻿function getScams(plaintext, gotAnswer) {
    chrome.runtime.sendMessage({ request: "clauses" }, function (response) {
        clauses = response.clauses;
        plaintext = plaintext.split(" ").filter(function (text) {
            return text != "";
        });
        if (plaintext.length == 0) {
            gotAnswer([]);
        } else {
            gotAnswer([
                {
                    clause: clauses[0],
                    text: plaintext[0]
                }
            ]);
        }
    });
}

//chrome.runtime.sendMessage({ request: "clauses" }, function (response) {
//    clauses = response.clauses;
//    plaintext = plaintext.split(" ").filter(function (text) {
//        return text != "";
//    });
//    if (plaintext.length == 0) {
//        gotAnswer([]);
//    } else {
//        gotAnswer([
//            {
//                clause: clauses[0],
//                text: plaintext[0]
//            }
//        ]);
//    }
//});