var xmldom = require('xmldom'),
    fs = require('fs'),
    get = require('./get'),
    pathModule = require('path'),
    url = require('./url'),
    vm = require('vm');

function parseDocumentFromString(str){
    return (new xmldom.DOMParser()).parseFromString(str);
}

function onModelCb(cb){
    return function(err,s){
        if(err){
            cb(err);
        }else{
            try {
                var doc = parseDocumentFromString(s);
                cb(null,doc);
            }catch(e){
                cb(e);
            }
        }
    };
}

exports.platform = {

    //used in parsing
    getDocumentFromUrl : function(url,cb){
        get.httpGet(url,onModelCb(cb));
    },

    parseDocumentFromString : parseDocumentFromString,

    //TODO: the callback is duplicate code. move this out.
    getDocumentFromFilesystem : function(path,cb){
        fs.readFile(path,'utf8',onModelCb(cb));
    },

    getResourceFromUrl : get.getResource,

    //used at runtime
    postDataToUrl : function(url,data,cb){
        //TODO
    },

    setTimeout : setTimeout,

    clearTimeout : clearTimeout,

    log : console.log,

    eval : function(content,name){
        return vm.runInNewContext('(' + content + ');', {}, name);
    },

    path : require('path'),     //same API

    url : url

};