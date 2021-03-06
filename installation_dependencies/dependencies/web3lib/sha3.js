/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/** 
 * @file sha3.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */

var CryptoJS = require('crypto-js');
var sha3 = require('crypto-js/sha3');
var config=require('./config');
var utils = require('./utils');

module.exports = function (value, options) {
    if (options && options.encoding === 'hex') {
        if (value.length > 2 && value.substr(0, 2) === '0x') {
            value = value.substr(2);
        }
        value = CryptoJS.enc.Hex.parse(value);
    }
    //console.log("shaFunOrgData:",value);
    if (config.EncryptType == 1) {
        var sm3FunDigest = utils.sha3(value,256).toString('hex');
        //console.log("sm3FunDigest:",sm3FunDigest);
        return sm3FunDigest;
    }else{
        var sha3FunDigest = sha3(value, {outputLength: 256}).toString();
        //console.log("sha3FunDigest:",sha3FunDigest);
        return sha3FunDigest;
    }
};

