/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import NetCordaCoreCordappCordappInfo from './NetCordaCoreCordappCordappInfo';

/**
 * The NetCordaCoreNodeNodeDiagnosticInfo model module.
 * @module io.generated.model/NetCordaCoreNodeNodeDiagnosticInfo
 * @version 1.0.0
 */
class NetCordaCoreNodeNodeDiagnosticInfo {
    /**
     * Constructs a new <code>NetCordaCoreNodeNodeDiagnosticInfo</code>.
     * @alias module:io.generated.model/NetCordaCoreNodeNodeDiagnosticInfo
     * @param version {String} 
     * @param revision {String} 
     * @param platformVersion {Number} 
     * @param vendor {String} 
     * @param cordapps {Array.<module:io.generated.model/NetCordaCoreCordappCordappInfo>} 
     */
    constructor(version, revision, platformVersion, vendor, cordapps) { 
        
        NetCordaCoreNodeNodeDiagnosticInfo.initialize(this, version, revision, platformVersion, vendor, cordapps);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, version, revision, platformVersion, vendor, cordapps) { 
        obj['version'] = version;
        obj['revision'] = revision;
        obj['platformVersion'] = platformVersion;
        obj['vendor'] = vendor;
        obj['cordapps'] = cordapps;
    }

    /**
     * Constructs a <code>NetCordaCoreNodeNodeDiagnosticInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:io.generated.model/NetCordaCoreNodeNodeDiagnosticInfo} obj Optional instance to populate.
     * @return {module:io.generated.model/NetCordaCoreNodeNodeDiagnosticInfo} The populated <code>NetCordaCoreNodeNodeDiagnosticInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetCordaCoreNodeNodeDiagnosticInfo();

            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('revision')) {
                obj['revision'] = ApiClient.convertToType(data['revision'], 'String');
            }
            if (data.hasOwnProperty('platformVersion')) {
                obj['platformVersion'] = ApiClient.convertToType(data['platformVersion'], 'Number');
            }
            if (data.hasOwnProperty('vendor')) {
                obj['vendor'] = ApiClient.convertToType(data['vendor'], 'String');
            }
            if (data.hasOwnProperty('cordapps')) {
                obj['cordapps'] = ApiClient.convertToType(data['cordapps'], [NetCordaCoreCordappCordappInfo]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} version
 */
NetCordaCoreNodeNodeDiagnosticInfo.prototype['version'] = undefined;

/**
 * @member {String} revision
 */
NetCordaCoreNodeNodeDiagnosticInfo.prototype['revision'] = undefined;

/**
 * @member {Number} platformVersion
 */
NetCordaCoreNodeNodeDiagnosticInfo.prototype['platformVersion'] = undefined;

/**
 * @member {String} vendor
 */
NetCordaCoreNodeNodeDiagnosticInfo.prototype['vendor'] = undefined;

/**
 * @member {Array.<module:io.generated.model/NetCordaCoreCordappCordappInfo>} cordapps
 */
NetCordaCoreNodeNodeDiagnosticInfo.prototype['cordapps'] = undefined;






export default NetCordaCoreNodeNodeDiagnosticInfo;
