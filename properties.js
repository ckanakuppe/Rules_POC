

/* Properties module Created: Piyush Arya - 18 Dec 2012 Last Modified: Piyush Arya - 7 May 2013*/
define([ 'jquery' ], function($) {

			var module = {
				getTextFromKey : function(key) {
					var arr = {
                        "listTechnologyType":"Technology",
                        "listTechnologyType.HomeKit": "HomeKit",
                        "listTechnologyType.WAC":"Wi-Fi Accessory Configuration (WAC)",
                        "listTechnologyType.GameController":"MFi Game Controller",
                        "listTechnologyType.AirPlay":"AirPlay",
                        "listTechnologyType.iAP":"iAP",
                		"listComponentType":"Components",
                		"listComponentType.Lightning":"Lightning connector",
                		"listComponentType.30Pin":"30-pin connector",
                		"listComponentType.AuthenticationChips":"Authentication coprocessor",
                		"listComponentType.LightningAudioModule":"Lightning Audio Module",
                		"listComponentType.HeadphoneRemoteAndMic":"Headset Remote Transmitter Chip",
                		"listComponentType.AppleWatch":"Apple Watch Magnetic Charging Module",
                		"listComponentType.GCM":"Game Controller Module",
                        "accessoryName":"Accessory Name",
                        "equals":"Equals",
                        "notEquals":"Not Equals",
                        "contains":"Contains",
                        "notContains":"Not Contains"
						};
					if (!arr[key])
						return "[" + key + "]";
					else
						return $.trim(arr[key]);
				}
			};
			return module;

		});
