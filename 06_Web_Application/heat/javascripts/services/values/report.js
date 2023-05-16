(function () {
	'use strict';

	angular
		.module('cloudheatengineer')
		.value('report', {
			header: function () {
				return {
					columns: [{
						width: '*',
						stack: [
							{ image: 'data:image/png;base64,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', width: 150 },
							{ text: 'Heat Engineer Software Ltd', style: 'smallGray' }
						]
					},
					{
						width: '*',
						text: ''
					}
					],
					margin: [40, 10, 40, 0]
				};
			},
			footer: function (page, pages) {
				return {
					columns: [{
						width: 30,
						text: ''
					},
					{
						width: '*',
						alignment: 'center',
						text: [
							{ text: 'Survey reference: ', bold: true },
							{ text: 'SWEET COTTAGE 2015-12-12 15:10:18 (ASHP)\n' },
							'www.Heat-Engineer.com'
						],
						fontSize: 8
					},
					{
						width: 30,
						alignment: 'right',
						text: [
							{ text: page.toString(), italics: true },
							' of ',
							{ text: pages.toString(), italics: true }
						],
						fontSize: 8
					}
					],
					margin: [40, 0]
				};
			},
			pageMargins: [40, 100, 40, 60],
			content: [
				// PAGE 1
				{ // 0
					stack: [
						'', // 0
						{ text: 'Heat Loss Report', alignment: 'center', fontSize: 22, bold: true }, // 1
						{ // 2
							text: [
								{ text: 'Project Reference: ', bold: true, alignment: 'center' },
								{ text: ' ' }
							],
							margin: [0, 20, 0, 0],
							fontSize: 16
						},
						{ // 3
							text: [
								{ text: 'Heating Type: ', bold: true, alignment: 'center' },
								{ text: ' ' }
							],
							margin: [0, 20, 0, 0],
							fontSize: 16
						},
						{ text: 'Installation Address', alignment: 'center', bold: true, margin: [0, 20, 0, 0] }, // 4
						{ text: 'Title & Name', alignment: 'center', margin: [0, 15, 0, 0] }, // 5
						{ text: 'Address Line 1', alignment: 'center', margin: [0, 15, 0, 0] }, // 6
						{ text: 'Address Line 2', alignment: 'center', margin: [0, 15, 0, 0] }, // 7
						{ text: 'Address Line 3', alignment: 'center', margin: [0, 15, 0, 0] }, // 8
						{ text: 'Post Code', alignment: 'center', margin: [0, 15, 0, 0] }, // 9
						{ text: 'This report has been completed by company name, address and telephone number', margin: [0, 50, 0, 0] }, // 10
						{ image: 'data:image/png;base64,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', width: 150, alignment: 'center', margin: [0, 20, 0, 0] }, // 11
						{ text: 'The methods used in these calculations are from the Chartered Institution of Building Services Engineers (CIBSE) The Domestic Heating Design Guide 2014 and EN 12831. The UK standards for MCS MIS 3005 and MIS 3004 have also been met ensuring heat pumps and Biomass calculations can be presented.', italics: true, margin: [0, 20, 0, 0], fontSize: 10 }, // 12
						{ text: 'It’s important for the relevant persons to read this report and notify ‘company name’ of any corrections that need to be made before the heating system is installed. ‘company name’ is not liable for any inaccurate calculations made due to incorrect information, therefore it’s important that the information provided is to the best knowledge available from the home owner, architect or builder.', italics: true, margin: [0, 20, 0, 0], fontSize: 10 } // 13
					]
				},
				// PAGE 2
				{ // 1
					pageBreak: 'before',
					stack: [ // content stack
						'', // 0
						{ text: 'Heat Loss Report', alignment: 'center', fontSize: 22, bold: true }, // 1
						{ text: 'Contents', bold: true, alignment: 'center', margin: [0, 20, 0, 0], fontSize: 16 }, // 2
						{ text: 'Appendix A Summary of Results', bold: true, margin: [0, 10, 0, 0] }, // 3
						{ text: 'Appendix B Summary of Survey: Room features', bold: true, margin: [0, 10, 0, 0] }, // 4
						{ text: 'Appendix C Summary of survey: Room Dimensions', bold: true, margin: [0, 10, 0, 0] }, // 5
						{ text: 'Appendix D Summary of Survey: Vaulted Rooms', bold: true, margin: [0, 10, 0, 0] }, // 6
						{ text: 'Appendix E Summary of Survey: External Walls', bold: true, margin: [0, 10, 0, 0] }, // 7
						{ text: 'Appendix F Summary of Survey: Internal and Party walls, Windows and doors.', bold: true, margin: [0, 10, 0, 0] }, // 8
						{ text: 'Appendix G Summary of Survey: Floors, Ceilings and Roof', bold: true, margin: [0, 10, 0, 0] }, // 9
						{ text: 'Appendix H Review of Heat Loss', bold: true, margin: [0, 10, 0, 0] }, // 10
						{ text: 'Appendix I Summary of U values (W/m2K), temperatures and additional heating', bold: true, margin: [0, 10, 0, 0] }, // 11
						{ text: 'Appendix J DHW (Domestic Hot Water)', bold: true, margin: [0, 10, 0, 0] }, // 12
						{ text: 'Appendix K Emitters and Performance', bold: true, margin: [0, 10, 0, 0] }, // 13
						{ text: 'Appendix L Pipe Calculation', bold: true, margin: [0, 10, 0, 0] }, // 14
						{ text: 'Appendix M Current Radiators', bold: true, margin: [0, 10, 0, 0] }, // 15
						{ text: 'Appendix N Bivalent Design', bold: true, margin: [0, 10, 0, 0] }, // 16
						{ text: 'Appendix O Fuel Comparison', bold: true, margin: [0, 10, 0, 0] }, // 17
						{ text: 'Appendix P Ground Loop Design', bold: true, margin: [0, 10, 0, 0] }, // 18
						{ text: 'Appendix Q Heat pump MIS 3005 or Biomass MIS 3004 summary', bold: true, margin: [0, 10, 0, 0] }, // 19

					]
				},
				// PAGE 3
				{   // 2
					pageBreak: 'before',
					stack: [ // content stack
						{ text: 'Appendix A', alignment: 'center', fontSize: 12, bold: true },
						{ text: 'Summary of Results', alignment: 'center', fontSize: 20, bold: true },
						{ text: ' ', margin: [0, 30, 0, 0] },
						{ text: ' ', margin: [0, 10, 0, 0] },
						{
							margin: [0, 20, 0, 0],
							style: 'tableExample',
							table: {
								widths: [500],
								body: [
									[
										{
											text: [
												{ text: 'Heating Type: ', bold: true },
												{ text: 'Ground Source Heat Pump' },
												{ text: '\n\n' },
												{ text: 'Manufacture: ', bold: true },
												{ text: 'NIBE' },
												{ text: '\n\n' },
												{ text: 'Model: ', bold: true },
												{ text: 'F1345 – 24' },
												{ text: '\n\n' },
												{ text: 'Output at designed external temperature: ', bold: true },
												{ text: '21.5 kW' },
												{ text: '\n\n' },
												{ text: 'Maximum designed flow temperature: ', bold: true },
												{ text: '45oC' },
												{ text: '\n\n' },
												{ text: 'GSHP heating capacity at 0\u00B0C ground temperature: ', bold: true },
												{ text: '21.5 kW' },
												{ text: '\n\n' },
												{ text: 'GSHP=', bold: true },
												{ text: 'Ground Source Heat Pump' },
											]
										}
									]
								]
							}
						},
						'\n',
						{ text: 'Worst Performing Room', bold: true },
						{
							columns: [
								{
									width: '*',
									text: ''
								},
								{
									width: 230,
									stack: [
										{
											text: [
												{ text: 'Room name: ', bold: true },
												{ text: 'Study' }
											],
											fontSize: 11
										},
										{
											text: [
												'\n',
												{ text: 'Floor Area: ', bold: true },
												{ text: '11.8 m2' }
											],
											fontSize: 11
										},
										{
											text: [
												'\n',
												{ text: 'Power demand: ', bold: true },
												{ text: '1238 watts' }
											],
											fontSize: 11
										},
										{
											text: [
												'\n',
												{ text: 'Specific room heat loss: ', bold: true },
												{ text: '105 W/m2' }
											],
											fontSize: 11
										},
										{
											text: [
												'\n',
												{ text: 'Emitter type: ', bold: true },
												{ text: 'Standard Radiators' }
											],
											fontSize: 11
										},
										{
											text: [
												'\n',
												{ text: 'Seasonal Performance Factor (SPF): ', bold: true },
												{ text: '3.7' }
											],
											fontSize: 11
										},
										{
											text: [
												'\n',
												{ text: 'Temperature Star Rating: ', bold: true },
												{ text: '*****' }
											],
											fontSize: 11
										}
									]
								},
								{
									width: '*',
									text: ''
								}
							]
						},
						{
							text: [
								'\n',
								{ text: 'Calculated Energy using Degree Day Data: ', bold: true },
								{ text: 'The energy calculation method is worst case scenario, therefore assuming all rooms to be heated to their designed temperatures throughout the heating season. Of course most people don’t use all the rooms and don’t have the heating on within all rooms throughout a year at maximum. As a result, the calculated energy figure can be overestimated, therefore running costs may be higher with this calculation than actual.' },
							],
							fontSize: 11
						},
						// {
						// 	text: [
						// 		'\n',
						// 		{ text: 'Domestic RHI (Renewable Heat Incentive in the UK): ', bold: true },
						// 		{ text: 'It’s important for a Energy Assessor to visit the property to carry out an EPC (Energy Performance Certificate). This EPC will have an energy value (kWh) for heating and hot water. It is this value which will be used to calculate your domestic RHI income. If, however the property is a new self-build then the EPC from the SAP report can be used to calculate the RHI.' },
						// 	],
						// 	fontSize: 11
						// }
					]
				},
				// PAGE 4
				{   // 3
					pageBreak: 'before',
					pageOrientation: 'landscape',
					stack: [ // content stack
						{ text: 'Appendix B', alignment: 'center', fontSize: 12, bold: true },
						{ text: 'Room Features', alignment: 'center', fontSize: 20, bold: true, margin: [0, 0, 0, 10] },
						{ text: 'Number of rooms and total floor area', alignment: 'left', fontSize: 11 },
						{ text: 'Approx location (Degree Day):Midland (Elmdon) ', alignment: 'left', fontSize: 11 },
						{ text: 'Approx City (Ext Temp):Birmingham  -3.4 oC ', alignment: 'left', fontSize: 11 },
						{ text: 'Altitude adjustment 200 meters ', alignment: 'left', fontSize: 11 },
						{ text: 'Ground Temperature 10 oC ', alignment: 'left', fontSize: 11 },
						{ text: 'Outside Temperature -4.3 oC', alignment: 'left', fontSize: 11 },
						{ text: 'Degree Day Data 2425 (52 weeks) ', alignment: 'left', fontSize: 11 },
						{ text: 'Is property > 2006? Yes ', alignment: 'left', fontSize: 11 },
						{ text: 'If property has thermal bridging? Yes 8%', alignment: 'left', fontSize: 11 },
						{ text: 'Does the building have MVHR?  Yes 50%', alignment: 'left', fontSize: 11 },
						{ text: '\n', alignment: 'center' },
						{
							style: 'table',
							table: {
								body: [
									['Room Names', 'Designed Temperature', 'Fireplace', 'Throat restriction', 'Year room was built', 'Air Changes Per Hour', 'Exposed Location', 'Intermitted Heating', 'Vaulted Ceiling?', 'Vaulted Ceiling Type', 'Room Below', 'Room Above', 'Emitter Type']
								]
							}
						},
					]
				},
				// PAGE 5
				{   // 4
					pageBreak: 'before',
					pageOrientation: 'landscape',
					stack: [ // content stack
						{ text: 'Appendix C', alignment: 'center', fontSize: 12, bold: true },
						{ text: 'Room Dimensions', alignment: 'center', fontSize: 20, bold: true, margin: [0, 0, 0, 10] },
						{
							style: 'table',
							table: {
								body: [
									['Room Names', 'Floor Areas m\u00B2', 'Room Height m', 'External wall(Type A) m', 'External wall(Type B) m', 'Window (Type A) m\u00B2', 'Window (Type B) m\u00B2', 'Internal Wall m', 'Party wall m', 'External Door Area m\u00B2', 'Roof Glazing Area m\u00B2', 'Lowest Parallel room temp', 'High ceiling % increase']
								]
							}
						}
					]
				},
				// PAGE 6
				{   // 5
					pageBreak: 'before',
					pageOrientation: 'landscape',
					stack: [ // content stack
						{ text: 'Appendix D', alignment: 'center', fontSize: 12, bold: true },
						{ text: 'Vaulted Rooms', alignment: 'center', fontSize: 20, bold: true, margin: [0, 0, 0, 10] },
						{
							style: 'table',
							table: {
								widths: [100, 100, 40, 40, 40, 40, 40, 40, 50, 50, 50, 50, 50, 50, 50],
								body: [
									[{ text: 'Room Names', rowSpan: 2, margin: [0, 8, 0, 0] }, { text: 'Vaulted Room Type', rowSpan: 2, margin: [0, 8, 0, 0] }, { text: 'Dimensions', colSpan: 6, alignment: 'center' }, {}, {}, {}, {}, {}, { text: 'Wall Type or Roof', colSpan: 4, alignment: 'center' }, {}, {}, {}],
									['', '', 'Dim 1', 'Dim 2', 'Dim 3', 'Dim 4', 'Dim 5', 'Dim 6', 'Wall A', 'Wall B', 'Wall C', 'Wall D']
								]
							}
						},
691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+6910w1Ag/n/C/v3HHXgaGo6xPEW+j6Re/0v79GEjrQcetUFe6v5GnSf3DLnqfDZB9t0ePyWdippji6LMVkuPxtTWBD4IqqsgSV40Zh6mWNiB9Bf3qUyCI+CKt5Zp+09PWa2zXSJfytDBWjMqB2p8qslT+fWvR8zu8/wCeTtlsvH170Psfbuz4/K0O5ujzSdqZ6OBeYWjG4jBW69NzJ48OyKfo/HuPd7vObYzptYCorxWQk8P9LnrNn2h5L+6TuSxnmXeJmuyoLLcqLWMnUKrXxSG/0tOGanrWL+QHd/y07C3A8fyQ7A7syWYSrKphuwslujEUlLMWs9PSYOsMFMiBiQI4otA/p7izcrzmTxaXby8eHiNxr/q8uulfJPI/s/tW3ibkqz29Iyjfq28cRkKlTqJdVB4edT1sdbI7+/n90+zdqU22Pix1ZWbbptt4WnwFZLDsgy1mGjxyR4yrkDbrjN3hCE3RCb30i/uUbW4588IFoIhUY4cPKuOuc28cq/c3G6SMu7XIBY1AZyK+dDr4elMeQ4dKofIT/hQuRf8A2U/qhSL8GPYgJ/x/4+/24svPZ+K3hP7P83SVeVvuXAd27Xz5/CWFPl8f8+kH2n3x/Psrusuw6Lfnxd6sx2yKvZO6Kbd2RgTZHnx+2psLNHm66DxbrlbXFTGSRSsTkEXCseCxdz85JayNcwRrHQ6ipo1PkaYPR5y7yx9zxeYLE7Pul79V48Xha3IXxNY06jqwK8f59a8Xx67z+YPX+cipfjX2B3fSZOaoRP4H1/XbnzdHVyggRwVeBh89M6j8RyRlePzyPca2V3zZa3rCB5WDeWtgBx+3rPznzkf2M3K2Qc6WlmYooF0zSQxaiNIGoykaq0p+fn1tBfDHu/8Anh7nOHh7N6H2BmNoNDC8+5O6qql6u3HLC0nrkMO2RVVTSaOVSXExhj/bB9yfse4c5vpS7hUx+TN8R+Z7R1zX93eTfun7Ys39Wt4n+oqdItYxcx19BW4VQAcftx1sDYGTLz42glz9JRUWZloIJMpSY2qlrcfT17KPuIaOqnSN5I1a4V2RSR9QPY/VHZA01NXpTh+fWF9yLdLh47FzJbgnQzDQ5FfxICwXH9I9PmkW/wAbf7H37wk8x0z1w8bX5cEfW2jn/kq/tyiD4VoevUXRppn1r1zVdIPNyTcm1v8AevehXzNevCtM9cve+vde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3X/0d/j37r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde+nv3XusbsV5AuNJJIubAcn6f8jPv3Xuqrvnf/OJ+E/8vzbddku4OzMbk9xwRyxw7M2fPR5/cQrES8UVbi6SbzRqzEDlfrcfj37r3Wkv8kP5z381L+cbvh+kfhB13unrTqjPZCbB1FdtajylZhspR1FQaSnqtx7gq6V/sP22OoLILerni3v3XurSv5b3/CTnaW2cxj+4f5h25qntzd84iq8j1fPXnJ7e+7ZhO9VJuSlljqi19SFCPpz7917rcg6m6X6u6R2jidj9V7KwWzdsYWnjpcbj8RRxRiGnhRUiVqkgyvwq/rY/T639+690KQUC3+F/pwOfrx7917rv37r3Xzgf+FMv/b3P4lf+JQ6x/wDenxPv3Xuvo6UP/AKj/wCoWn/61D37r3Uh/wBJubfTn/Y+6v8AD6deqBk9UU/zhfht172R1XuPvrP1VTPubZeNqYsFCwBgp1qYmkkjS7AAMY739gXnbaIbm2E54/7HWaH3TfdjdeXea4+UYE/SuhQn/UfT5dBt/Jb+GvXm3uuNvfJDGzVMO8czTw0VenjGiogjRakQSev8sb/0/wBf2m5J2tbS1F6pwWZf2U6O/vge6m4blvn9RSoMMKI5PozVJpnyoPLrYYQ69JYEENxawHB+tvcjEBGJHn1gsaKdC5x1J966r1737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XvfuvddEgfX/ff19+690BvyL+SHSfxO6g3j3r8g+w8D1n1hsegkrs3uXcFZHTo7hSaXE4mkB8tZX1LgRUtFTo8srkBVPJHuvdfO++XXz8/mGf8KbfkifhT8Ddnbl6x+GOFzsMu56zIzVGIxWQ29DWiNezfkJuKiBWOn0oZcXtmneR2NgI5py5T3Xutm7rH+Tp8Zf5Tn8qL5v7c6txtPvLuvdnw571Ttvv7O46nj3fvCrg6nyrS4bDmTW+LwcUhcwYyCTSxAknMkvI917quL/hEb/2Rv8AMz/xZnbX/vrKH37r3W7H7917osfzB7ep+ifjF3n2rPMI32d11uWuodTqkkmUnomoMXDCHPqdp5UCAG5Nh7K92uFsrOa5agBQ5JxWnr5V6Hvtby8eb/cLaOXkBP1NzGCAK9qsCxp6YoT8+tVX/hPj3jU7a+WXYHWeZrHaDu7Y1flx559Ec+79r1n8dMwDn1SzQzTqgHJGo2+vuJfbrcJDu1wjNiWlPnRicft49dK/v38k+J7Y7bvkCam2y4eoUV0rKsalW9NOlSR5dbnMZsqX1MeQQDfRqNxf+n+t7m2Q1nA4Cn5GnXJc4rKM1Ax+zqb7317r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917rjoT/Ur/AK9hf3up4V60yqxqwr10UU2uo4N/eut+vz4/PrGUVF4UL6gfSo+tx9R70VB4ivVFiVRohGnNcY6ro+XP8tXo/wCYz1dZvzdXbu3ctUU7Q+fa+/c3T4JUIA1Ps+skfGSE2/U9OW/oR7Jdz5ei3SPRNK6g+QOP2dTR7c+9XMHtrMk20WVhMyEZkhDPj1YEH/Z9eqKu6/8AhOP2biGnrugO8drbwox5HiwPYuIrNq5RV58VNDlsQ1bTzyfgPLDAvPP9fcebp7byKha3lLU4D9nWbPKf94BY3NoljzjszQ9w1SRNrTFKssXhBlFPIFh8+kZ8N/5DfYG/d29k7e+ZGL3v1PQbbx+Im2RnthZjbeXw256mrqZY8lCmRliqFfwoqOFCqRq5902Xkh2ka33TWIgpI0H8VQBnPlXo297/AL6u1JbWF97VSw3srUWUXSE6E0kkBCVIIYAVP5DqwH/oHB+KP/P4u8P/ADo2n/8AUPsQf1A2L+Kb9v8A0L1jz/wcnur/AMom3f8AOBv+g+uB/wCE3/xQBDf6Yu9Db+lTtHi/1/5QP979+/1v9kP45v2/7HXv+Dj91mXT9Jtv/ZO3/WzojHzP/kLbi65HWtD8NqbsPtzM7pyeZpd4z73ym1sZhNsUFJTxNi6uXILFTBGmkeTVq1XA+g+nsh37kGGOKIbSZCzMdWo1FKY9PPqdvZb77ZvpdxHuqbWztoIUa3+mhIeSTXR1+JjhMigOes/S/wDwnN7p3EaSt777m2bsDHsI5ajB7JoKzeud08M1JNXVhoqSNxyDLG0y/wBFPtiz9tDMoaaUqfl5fnXpZzh/eA8v2sxt+TNqkuacJJpPDUn/AEjQ6h1eT8SP5V/QnxBrcbmNl7y7g3LnqAuyVGd3/mKXASsVHkEuzsQ8WNIJFxqgZh/X3Im17BabSn6c0j0pxbGPl1hD7ke/nM/ucT+9rOxiGcxQgOAf6RPEeoGTmnVm0S8tccekc/ni54Ps+jaJv7MZ88U/4vqDaUNQTn9g+weXWfSv+pX/AGw9uder13pH1sL/ANbe9EBviz17rwUC9gBfk2Fr/wCv73Xr1Seu/fuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3UUhQxfQSST9SLG3+HvxLU7fPr1aYJNPSlR1zAJ+q2Gm3H9Lf0+n+390UPXvII68SCMDj0G/YHT3VvatC2L7I662bvmieMp4d0bcxmZ0RkglYpqyJnT/kBgfaeXb7Gc6pow35Do52bmXf+Xp/G2S7mtXzmNyuCKGoyDj5dLrH4yixNFR43G0kNHj8fSwUVBSU6FIaWkpYlhp6eJR9ERFCqB9AAPakGg0VOOilpp5ZDJKa1/mfXqeEHF1vp+h+n+xFx78KCuTnppgGNaV6bM3hsZn8Pk8HmsfBlMPmKGqxmUxtWnlpa/H10DU1ZR1MX9qOSNmR1/IJHvzKsqmN8g+o6ctbiawuUvbU+FLEwZXXJVgaggeoPSJ2J1H1l1ljY8X1115s7ZFBEgRaXbO3MbhlZVA8YkekjVnt/Vyf9f20lpaQNqVB/I/5OjTd+ZOY96Mku73klxK1KFnamOHnTHy6EMqxF9N7cIbMCOLcg/X/AGHt1C9a8B6ef+x0TjUMyE0+X+X/AFDrJGeSNJHH1ubE3/Hu5UA1B49bGmvaT+YP+HqR711vrq4/qPfutV66DBrkEGxtwQf969+638uuXv3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r//S3+Pfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XvfuvddE2B5A/1/8AfD37r3RKPmD/ADA/i18G9nTbu+QXa219n+WnqZsLg67JLHls9LTr+5S4+ONHUPqIQeRgLkc+/de60gPmr/wpT+Znzt3nmPjj/LM6q3fj8VnJ5qKi3FiaRU7FnVnNPFPhsvj6gRRqRJ+piCWsbe/de6FH4Df8JcO7/kZuTF/JD+Z92huDK1ucNPkJtkVeRyD9gCoJ+8mg3JPko5aeSJjIVMYcnUG/Fvfuvdbs/wAYviB8ePiDsyk2L0F1jtbr/FR08MVbNt/EUmNqstJApT7jJyUgAkcnksfyT7917ozulfwAOb8fgk3J9+691y+n+8/7zyffuvde9+691737r3Xzgf8AhTL/ANvc/iV/4lDrH/3p8T7917r6OlD/AMAqP/qFp/8ArUPfuvdSWAYWIuOPr/gbj3VgCpByOvEA4PVdP80dQnw77NAAF6Jj9PyaeX2HOaCTs5YnINK/L5dT193Fm/11dtNfxgflwp0G/wDJx9fwx2XqFyJVsW9X0pY7Dn/X965RodiQeWt/216PPvYKqe7l4seANH7KdWsf2lBANnFv8COBa39Px7E3WNJ+MfYf8HWf37r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XvfuvdcWbTb68m3Av+Ln/evfuvdEA/mJfzJfi9/LM6Pr+7fkjvCHHPVR1dF1/wBc4uWmqN/9p7lgg88O3NoYVj5H50mqrJVFPTI3kmdRYH3XutCPauxf5m3/AArE+Uzb13vX5DoL4DdX7kENO1MuQPW+wsXHMVlxO0KWqKJune1VTkpU10t46YsSwhgUQSe6919BP4O/BD41fy9ujNv9B/GTr/G7N2ri6emm3Bm2iSo3h2BuMUqwVu7d87gcfcV1bUEF7uwjiU+KBI4lCD3Xuo/8xoW/l9/N8H6/7KX8g/8A31WWt7917rVu/wCERv8A2Rv8zP8AxZnbX/vrKH37r3W7H7917okHz2+K+f8AmZ8ec30PhuwY+t4Nw7hweTzmbbDPmWqsTg6p8guJipkmh0mSdad2csRZSCOfZPv23m+2x7XVgjPUo+zPuLZ+2XPcPNr231f0ykIvo7FasKlfQj5Vx1rCfyZvg/uHs35H7u7l292lFtOs+IncmPwNRjJcA2QTfGPqJshjMtF5I54xS+emp51S6SBWdCbhbGLuTuXZE3aRopNJt9Jp/piaeX9H+fXRv74HvHY7ZyDa8uT2nj/1jieap4QkCI4yMkuOFaAdbpxFiLn6G66ieTexvp9zO2lf1Gz5ft+3rkg2jtLkj5dTPdur9e9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XCQ2X/Yj/Y8/T37rRAOD1hCA6iHPNxY2A/qD/X3XSp49a8NB8IofXPXSo1/UyccDkfQG9/p7cYgiij9vWtJHdqLH5+Q/LryxAPqJX6EAaj9CQfp9Px70SSukY/IdWA0dqfDxzxr9vHrPZP6/wDJ3ulD69bx6D9nXDT/ALULXuLGx/1j73Q+R/wdaFQCDmvXBo9VjqS9/qTyP9YfT3YejZ6qU1qASQR6dcwpAPrUn8fQW/pwPeqL6dWVafEa/kOuARl5LhgCeAoPB4+gHvzHFFUdeXGNIH7esqE88f0P+vcnkfj3VdX4gPy638+snu3XuuGsf0P+vxb3UMCxX0698/XrysWJ4IANgSPr/iPdv8nWq5ocf5eufv3W+ve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de64M+kgWJJvYfgkC9r+/de6o4/mmfz8Phh/KyzM/W3Yk+a7Q+Qcu0qHe2L6W2TJT09d/Bq7LRY6lj3DuWdJabF1U8LTVlHT1aapoYmZbAqW917qkD/oN0+Ov4+C/dvP4PZeyzb/ANUvfuvde/6DdPjr/wB4L92/+jK2X/8AUXv3Xuvf9Bunx1/7wX7t/wDRlbL/APqL37r3Xv8AoN0+Ov8A3gv3b/6MrZf/ANRe/de69/0G6fHX/vBfu3/0ZWy//qL37r3Xv+g3P46/94L92/8Aoytl/wD1H7917rx/4W6fHPi/wY7tAvyT2XsqwA5Y/wDAL+nv3XutoH+WT/MO6p/mefFPa3yj6oxlRtejyuaz21t17ByWVgzOe2DuvA1QNRt3P5Gkhgheoekmo65TChXxVEfqLXA917qwc8D/AFrf7x7917qM0gC6ibWJvYcAAX+n+H1v70Goup+tKO+hzWlPz4dNm3dwYTc+Lp81t7J0WXxFW8602Rx8qz0lQ1NO1LUCOVOCUkRo2/oykfj3VJEkBKZA6V3ljd7dcNa30ZilFCynBFRUH8xTp9936S9e9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3X/09/j37r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XibfX/fX49+691xLAED+v4sb/W1/fuvdAL3x8lukfjZs7Lb87m7D29s3AYellqqw5DJUa5AwQxtLIabEvIs0rEKQAiE39+691pU/wAwv/hVvubf2ZzHRn8tTr3M7ry1dJPQYztenoKzLyziRzSxadpvTMyD6MG8n5t9ePfuvdFD+In/AAnq/mA/zMt1435DfzBe2dybM2fuCvgzf93svPWZl81QSzfcS0lLhxVRjGllb6rFqUm/1X37r3W8L8L/AOWJ8PPghtGi2v0J1NiMVLTxwebPZtY9wbgkqYI/CZosvkY/Oga5JAb+n1t7917qwgDjm/8AT/bf63v3Xuu/fuvde9+691737r3Xvfuvde9+69184H/hTL/29z+JX/iUOsf/AHp8T7917r6OlD/wCo/+oWn/AOtQ9+691K96PA9e6rq/mk/9kd9mf9QJ/wDceX2GuZ/+SM3+mHU8/dw/6ertv/NQf4R0Gv8AJu/7Iy2X/wAtB/7ixe98o/8AJCT/AE7/AOHo++9l/wBPdvf9r/l6tY/tf8h/8T7E3WNB+MfYf8HWf3rr3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XRPBt9fx/S5+nv3XuqOf5x/88f44/ymut5aHLS0Ha3yh3Vh5qjrDoPEZSOGsMkmqKj3V2NXUwkbE4WJxrLMnnqdJjp0YnWvuvdanXwA/lP/ADi/4UEfIRf5iH80XeW8Nr/GSpyAn2nt0/eYPK9i4CmqvNT7G6c27UsyYHasRvHUZYqZJzqEImkLzJ7r3X0POnOmOrfj71ptDp/pbYu3OtutNi4qnw+1dm7VxsGKw2JoYFtpip4FGqWRryTTSXkkcs7szMSfde6E8C3+x/xv/sb+/de6Jh/Mc/7d+/OD/wAVL+Qf/vqct7917rVs/wCERv8A2Rv8zP8AxZnbX/vrKH37r3W7H7917qO6LZrX4Dn/AAN0PF/9j7o/eh1enVowFbtAzT/COtb7/hPygO4f5hF73/0/UQ/Ufzks/wAj/H3HnI/615uMznuLIPTA106z4++0qptXJSKAALSYjGalbXifPrZEMQKgc8Hjkg8fTn3IwwNPH7c9YC4rqpU/PPWX37r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xv99/vh7917rgW5/qCbC39SOPp/sfr7917rVZ/nO/8ACmjpH4ET5349fFGm278jfl4tQmGyUcFY2U6t6hyMkipJBu6rw7mTK5Zb6EwtFKuh2U1EyFTC3uvdUwJ86P8AhXd22q9ndcfHjf23thb8H96NoYOHpbaX2+MwGW/yjHUtL/eDx1piCEGI1SiQoVLX4Pv3XuuX+zSf8LI/+fIdhf8Aoluu/wDo/wB+6917/ZpP+Fkf/PkOwv8A0S3XX/R/v3Xuvf7NJ/wsj/58h2F/6Jbrv/o/37r3Xv8AZpP+Fkf/AD5DsL/0S3Xf/R/v3Xuvf7NJ/wALI/8AnyHYX/oluu/+j/fuvde/2aT/AIWRj/miHYX/AKJXro/72/v3Xui1/IP+cx/wpT+B+Q6s3d81MVl+sthbu3hFS0VDuXqzYeGk3zSbbnp8puvbuJyNMk5hmajkCGbQfGZFYA2t7917r6RvTHYlP291H1b2zSYqpwVL2f1vsTsSmwtXUR1lViIN67WpdyQ4ueshSOOWSnWpELyJGoYqWCgEAe690Jh/17f8i9+690GvbXZOA6c6x332ruyQw7c6+2nmt45x42VZP4dgce+QrEjZ+NbKhCg/Uke0t5crbQ+Nxp0ccu7Dc8y79a7BY/2l5NHGuK5dgPUV+yvT9sXdeM33s/a29sLL5sRu3AYjcmMkDhw1DmqBMhS3I4JCSAEj8j29FMs8YkXzHSPctuu9n3Gfab0UltpHjb7VYj8ulb7c6R9e9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XvfuvddMbA2+v4/1z9PfuvdVY/zdf5n/Vn8q34kbs723lLQZvsvNJUbV6H6yeriTIdg9j1tOVoUeNSHTGY5Sa/LVVrR06FFvNLEj+691qm/8J3/AOVh2H/MB753v/Oc/mQ4Y9jUm+d5ZbcPSG1OwsdDksb2Ruxp2pqvsrIYDKq8Um38IiLjdvU0sZhkkiLorR08Zb3Xut3T/ZPfiWbk/F/49Ek/X/Qz11z/AOs737r3Xv8AZPPiV/3i/wDHr/0TPXX/ANbvfuvde/2Tz4lf94v/AB6/9Ez11/8AW737r3Xv9k8+JX/eL/x6/wDRM9df/W737r3Xv9k8+JX/AHi/8ev/AETPXX/1u9+6917/AGTz4lf94v8Ax6/9Ez11/wDW737r3Va38434vfGnav8AKs/mAbh2v8euj9ubgw3xZ7ayOHzmC6p2LicxichS7bmlpq7GZOgoI5oJo2UMksTqwPII9+691Wx/wjOF/wCVj2Ifyflt2Tz+eNjbYP8AxPv3Xuttw/Q+/de6AT5K9oUXSHx+7i7aragQJsPr3dG4IJCRY5ClxbjFoAbX1VLRCw5P0Hss3W8eHa5rpRQoCR0MPbvltubOeNp5cVS31VzBGwz8AcF/WnbXPVXX8hjvWt7a+GNbtTM5GSt3P1V2TujE1wnmM80eM3VWvu7GFnclyDJU1QBN7AAfj2HuSt1O67XJMfj8Rh/xlf2dZFffP5Ej5J91IprePRBuFnFKtMDVGXhP2f2a4HH8+ru1Z9QBI/Fxf+ov7GhKgCvE9YiDVjV8/wBtcfy6ze/db697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r/9Tf49+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XvfuvddEgWv8An/ED/e/fuvdIPsPs3YPU+18hvTs7duB2LtLFRtNktw7kyMGMxVHEimRmnqqiyrZRc39+691qI/zKv+FW/UPT9bX9R/B7bi919qSz1GMGeqUkm2i08zGGlqdv5fDySmeQPdlBW3A/r7917qlHpn+WN/N7/nkdjwdq/MPd29uu+nZchHVrR79nyGHr6XF1EgmX+6GNr4As8SqGsxcEsQLfn37r3W6T/Ly/khfCT+XnjcPk+v8Ar7F7p7VoKamiqO1M/joP7zVBis3qeJmTlxr5/wBh7917q4pIVQaVCBOPSqKov9L2Ww/p7917rKB/xrgC3Fvfuvdd+/de697917r3v3Xuve/de697917r3v3XuvnA/wDCmX/t7n8Sv/EodY/+9PiffuvdfR0of+AVH/1C0/8A1qHv3XupXvR4Hr3VdX80n/sjvsz/AKgT/wC48vsN8z/8kZv9N1PP3cP+nqbb/wA1B/hHQa/ybv8AsjHZf/LQf+4sXv3KH/JCT/Tv/h6PvvZf9Pdvf9r/AJerWP7Q/wCD/wDE+xL1jQfjH2H/AAdZ7j+vv1evde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XEuoYKTyeR/twP+J9+691qk/z0P8AhR/178D/AOO/Ff4eS4nub5q5ZP4Hk6ygjTP7K6MrsjekpkzK0ZcZTcutl+1wcIYRNpNWVYiF/de6rd/k6f8ACcvtT5L9iU/8yL+cfJuTfe8d/wCai7H2v0L2HkJchuTeVdWNHkMXvDvRJSWgpCNJo9sekCEIlXFHFan9+691vk4nGUOHxtBicZQUWLxmMpYKHHYzGUsFDjsfQ0sQhpKOho6VUjihiRQkcaKFVQAABx7917px9+691737r3RL/wCY5/279+cH/ipfyD/99Tlvfuvdatn/AAiN/wCyN/mZ/wCLM7a/99ZQ+/de63Y/fuvdYW/t/wDBG/6F90/Afz6svxD8utb/AP4T8f8AHw/zCP8AxP8ARf8Auxz/ALjvkL/cjcP+ai/8/wDWfX33f+SbyV/zxzf8dtutkb3I/WAfXvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvd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K8K46ya+/wBct2u4cn7VzNC6NNYyGNgXXxPBauQnxEB/TArXrcqivqBPBPPP1IAsOD7m0gBjQ8OuUCMHjVsjPnj16k+/dOde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691//V3+Pfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XvfuvddH8f6/v3XumvK5nF4SlmrsvkaLG0VPE8s1TW1MFLFGka6pGMk7KpsPr/T37r3Wst/Mw/4U3/EX4cR5rr/AKUrU747mpnnoJcZtishai23lQfDEcnDURMJ0DanYI44QgG5Hv3XutYHD7C/nY/8KEOw3zmZy25+qPjxmWlp5crTUuTw/XtNQVUgdYMlt+CpU1Euh2JYqvo9Ok2t7917ra+/lof8JvPhp8HMVhd1dgbcoe6u54VSTK53ckUWV2mlQEDJJi8HlIneFwxbnyWIA/x9+691sW4vF4/DY+lxeKoqfG46ijENJRUcawU1PCn6Y4Yk4Vf8B7917pwsOP8AD/iPz7917rv37r3WGVyv0Ki9rX45v+SeLe6t4tKxLqP20/yHrxBOF4/t6bpcvQQkpLkKGKT8pLVU6MLn62Zv+I9hy55u5asZjFf30ELrhkaWMEH82B/kOn1tblhUIx/I/wCbr38bxP8Aztsb/wCdtN/0d7Z/r1yb/wBHO1/5zxf9B9b+kuf99t+w/wCbr38bxP8Aztsb/wCdtN/0d79/Xrk3/o52v/OeL/oPr30lz/vtv2H/ADde/jeJ/wCdtjf/ADtpv+jvfv69cm/9HO1/5zxf9B9e+kuf99t+w/5uvfxvE/8AO2xv/nbTf9He/f165N/6Odr/AM54v+g+vfSXP++2/Yf83XRzeKt/xd8b9f8AlcpTx+f7Y9+/r1yb/wBHO1/7KIv+g+vfSXP++2/3k/5uvnU/8KUsRlsz/Np+KVdh8XlcrRU3ZfWNRNXYvF1uSo4IRuPFO0ktTRhowBYk3YWAJJAB9rLPm3lW/illtdwt5BCNTlZo2CrnLUY0GOJpwPTo269IU+C/d/ROfsx19E+jzWJFJSj+K45bU0A0tWUwYWiAsRq+v+HtH/Xnk4YO6Wp/5vw/9B9NfSXP++2/3k/5uszZvFAEjLY2/H/KbTf15/te/Hnnk04/elqP+b8X/QfWxaXP++2/Yf8AN1Xv/M7rqSv+H/ZtPRVVPWVRoCVp6OaKomk/yaXhY4SSebX/AN7H5D/M/OvJo27w/wB52pBPD6iKv/H+pw+7rHPa+5m3XVypCI2pjQgY+0etOg2/k/VdNjvhrsuKuqIKCYyB/BWSpSzMBSJdgk+kmzDTx/Tn2xyfzzyd+5wrbnaijvgzxDz+b9Hf3pXO5e693dWys0bJGQRUitKnI+fl5dWoHNYcK3+5XGkgEg/fU31tcE2b2KG555NXjudr+U8X/QfWOf0l0aHQ1Tj4T/m6kQ1sdQpkp6iKeO1hJFolS55sGQkH/W9m+2bjY7rA0223MdyteMbKwX5HSW/n0ncOrmFlKt8waf5upKu/ALf1v6bf61/a8MSeIIHE+VetUYChyfX/AGOmDK7s25g5RBmdy4DDzsNSw5TMY2glZT9HWKskRiP9Yf7H3uqFh3gD0x0/Fa3Vwum3VmPqEJz+XTf/AKSuvP8Anvdl/wDoV4D/AK/+7VX1HT/7t3L/AJR5f94b/N17/SV15/z3uy//AEK8B/1/9+qvqOvfu3cv+UeX/eG/zde/0ldef897sv8A9CvAf9f/AH6q+o69+7dy/wCUeX/eG/zdZ6bsHYtZU09HSb22lVVdVPFTU1LTbmwk9RU1E8gihgggimLO7sQqooJJIAF/fqr6jqrbfuCKXeCQACpJRgABxJNOA6WPvfSTr3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917qDV19LQUtXXZCppqChoaeerrK2rqI6Wko6Sljaeoq6upnKpHHHGpeR2OlQCWNh7917rRY/nOf8ACkHf3b+/J/5c38n2LO9i9nb6zMvXO6u+uvKKfN5rM5auL4+t2P0JDRhzJKf3FrNxFSkaAmlKhXnHuvdHU/kYf8Js9lfDWTC/Lb50UuJ7m+Y+bK7kwG18xMdybO6OyWUJrqzIST13kXNbreR2FTk6jyR051CnBlYzH3Xutt1I9JJBJ/1wL888n+v+++vv3Xusnv3Xuve/de697917ol/8xz/t3784P/FS/kH/AO+qy3v3XutWz/hEb/2Rv8zP/Fmdtf8AvrKH37r3W7H7917rA/8Ab/4I3/Qvun+hk/b1ZPiH5da4H/Cfj/j4f5hH/if6L/3Y5/3HfIX9vuH+nX/n/rPr77n/ACTOSj/y5zf8dtutkb3I/WAfXVx/vv8AD3qo69137317r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917rgXsbEfgck2BJvwP9t7917qu3+Yz/NA+J38sbqCbs/5Jb4paPL5amrE676qw1RTVnZHZmWpoyRQba2/q8ggV9K1WQmVaenB9b6iqt7r3WhVnN4/zYv8AhVr8hJdt7Tx9R0L8ENh7op1roUkyVN0/1/Rwyq8dZujJAo+8N3vARMlHH6ImIKR0sQ1t7r3W9R/LL/lJ/Ej+Vp1RT7I6C2jHkuwMvQUy9ld47pgpsh2V2FlFGqd6zJ6QKHHrIW+3xdCscEa21CSXVI3uvdWggfn8/wC9f1HPv3XuvWt9OPfuvdd+/de697917r3v3Xuve/de697917r3v3XutGD/AIXBf8yF+Av/AIl3un/3jcL7917rcE+FH/ZGnxJ/8Vk6F/8AfV4r37r3RmWNh/sDf/be/EV68aUz1qf/APCiiXtbdm5Op8Vhti7xquo+rtsV+6t0b4gweRk2fjt0bryC4igpqvPiP7ZZBDHHGUaS6s4/1XuI/dBLuSKBEjJRDlvI9dLf7v5+V9tl3G6vbqMX912xQ6l8YrCKlQlS5LFiR24Ar69Lj/hPdle0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UFlAAHuN7nd9yuYmYyFXB4E0P7Out+y+3XJOwQxbHtO2W9Ao/WdRoNPRiG9KU9egg8af6hP+pafT/kn2w97fRiskxX7TTo2PKPLavobb4AfTStf+O9e8af6iP/kiP/o33pb++cVWYn7D1ccn8uE0G3QV/wBIv/QPXvGv+oj/AOpaf9G+3Bc7meEjft6q3KHLimh2+Af7Qf8AQPRwP5esaf7P18HjpS/+zf8Axo+iJe/+mjC/kL7WbRe3zbvaxvKSDNGCK+WtajoCe6PK2wR+2PMs1tYwh4tq3B6qoqhFpMQ3DFCAR19Xr3PnXEbr3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de6DntbtfrnpHYG6e1e2t7be69662TiarN7p3fujJU+KwuIx1JGXkmqKupZVLE+mOJbvI5CIrMQPfuvdfPL/AJjP84f5o/z3e+qn+W//ACntnb4xXQGcrJsPuzd1LNU7ez/bOApqoLk919i5yAadt7MiKmT7OSUy1UQBnBaT7Me691tIfya/5E3x0/lN7Bpt0Tx4ztf5YbmwsEHYfeOToB48KJotVftPrCjrBrxuKViUln4qKsKrTFRaNWLmZIIjJJKkQGdTkBcepJAp+fVkXW2gVJPCnVx2S7p6vwtXJjsjvDGw1kB/djUVM5TSbHVJTI6kj6fqPPuDt5+8j7O8v7g+3brvUCzxmjKJEI+3DHoR2/J/Mt0oa3s5Gr/RP29RP9mA6g/57ai/6kZD/rz7K/8Agr/Yn/o+wf70P8/Sn+ofN3/KBN/vB/zde/2YDqD/AJ7ai/6kZD/rz79/wV/sT/0fYP8Aeh/n69/UPm7/AJQJv94P+br3+zAdQf8APbUX/UjIf9effv8Agr/Yn/o+wf70P8/Xv6h83f8AKBN/vB/zde/2YDqD/ntqL/qRkP8Arz79/wAFf7E/9H2D/eh/n69/UPm7/lAm/wB4P+borPzf7H2f2b8NPlj1zsLNRbm3tv345dz7O2ftyijqI63O7m3J17X4fB4e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gfftI8x1RiVeg4H/AFHrosNZj8i60IVo7FXX/BkPIv8A1PvYBJwOncU+XT5h9tbj3FFlZdvbfzObiwONkzOdkw+Nq8kMRiIHEU2TyDUysIIAzKpmkIQfk+34Vmo1OkEm4W8Mnht0xA8cG4vwR9Cp/Tb6/wC3ufaYA51fPpYrpKmtOB67uf6/7z73Qdbp1654PNj+fx79QdeAz12b3H1/2H+9e9UHVyKdSaagyNas0lLQVtZBTreplo6Soq44ABy00lPGwS351Ee7qBkdI3uFSgfhXqKtjZ76lNxwRfg2N7X97ZSDQDpQJLcrqx14n/Ye6063qBAK+fVrP8jy/wDw638Nf/D135+Be3+hnch+p9iTlEhd/g+ZI/4yesfvvR0/1kd41ekP7fHj6+mrGBYcfRxxzcG/PuciaVp/F1xqqCWA/i6le79W697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3XuuiQLX/AK2F/wCp4Hv3XutOD/hT3/OXzXRm1ov5aPw8zeQzfym7/wAfTbf7WyWyDNX7i642Lu9hjMdsTCNjC0ybk3MspiSKEeano21+l6iG3uvdH8/4Tz/yacL/ACu/jVHvLtDBYyp+Yfe2IxmV7bzTJDWVewNvkDIYrqHC5KxKxUbsJss0JC1FYBfUsETD3XutiMD/AGH+2/3n37r3Xfv3Xuve/de697917r3v3Xuve/de697917r3v3Xuqvf51f8A26U/mJf+Km9w/wDvLz+/de6pl/4Rm/8Abq/sL/xbbsr/AN4Xa/v3Xuttw8+/de6BT5FKP9l/70Fh/wAyc7NI4+n+/OreB7QbiP8AdbPXzjb/AI6ehj7ff8r7sjniL+0z/wBREfVSv/CeIav5e8RPP/Gauxfrz/yiYz+v+v7Cvt//AMkNv+ar/wCBeslvvxU/15ov+ldbf9XJ+r1LAfQAf7D2OCATUjrDipPXfvfXuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de6//9ff49+691737r3X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h7991UX2psQtD/u1gyAB/wARL70Fet+v3L/XLHr3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917rokD/eeByeP8PfuvdI3f3YOxertnbk7B7J3dt7Ymxdo4qrzO5937sy1HgdvYLFUcJlqq7JZXIvHDEiKPqzgngLckA+691oK/wA0j/hR78hvnl2Y/wDL7/kv7e35kot/ZCp2TmO7NpYfIRdmdlxzSiirqTq+GRUm2/hCpb7nO1IinaHU6vTRMWb3XurKv5L3/CYHrH4jVeA+UHzyXBfID5X1FQu5cXsfIyJujrHqXN1b/fPXVf8AEPJHuLcCTMzS5GpElPFINVOrteZvde628EQIqqqhVVQqoLBVAXSFUKLAf4W9+691z9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691owf8Lgv+ZC/AX/xLvdP/vG4X37r3W4J8KP+yNPiT/4rJ0L/AO+rxXv3XujNc+9Hr3VVP86of9i1/kVb/lW2H+Lf81FxPsJ84f8AKuXn2f5esjvunj/mO2yf6aT/AKtt0/8A8u//ALdXdAf4/HXK3/x/yPI+3+V/+Vcsv9J/0F0X+/P/AIkJvR/5fov+OQ9fL2pOKWm/5YQ/9CD8e4OoNR/PrsZan/FVPzH+HqTcjn/gw5AI5Q82N/8AbW/4r7bHGnS0/Cx+XWyD8Ru6an4qfyW95/ILZHWPS28OyIfl3S7Jjy/aXWG1t/ePAZfDNUVFEj5ynklUK0KGL1kL+LXPuTtiv22vlhr3SKeK4yAfJesDvdHlOz9wvvGWfKW73VxDanbEfTDJoyXnrwVuNBWvp+1o+Nnzj+O/8w/sbbvxJ+cvxT6B2knc2Rh2hsP5DdG7Mx/Ve9thdh5INFtitrVwKRw1EE9T46TQyFdTqJVkRjZLZbxtu/yGyuFAac6QQAM/s4Yz/Lox5s9ouZvZbbW5x9tt0uZYNr03EtvPIJFmVaBkI0owFCT2kYBxw6Ld0R0V81PjV2p/My6P6H37sfbUvSfS29cZ8hajdOOpK4716jwdZNLTjaSVNNUeGuqYZGmiYaAvk5/wR2dldbdc7hDZDAQ1r8q/6sdDDmnm32+545a5W5r5jidnv7mM2yqSPBnFAS4oe0aqZqMD7ei//H7+V98hPkZ0Ptb5HbMzvWGA6lzu/NxbGzW6N+btj2tjevU2tRyVWT3PvbI5FRTUuOZkFPTeKR5paiWGKOIs1vZVZ8v325wLLJ+mSSNZoAaGnE4/2eh5zf748u8kczz8rTW89ze2sULRpCrMxWWNZDQBGrxH2A9DNub+Sn8q9v7i2M+P3j0Tu7pbe+3snuY/KHb/AGPQv8f9rY7CyilyUG7t41iRvS1WsolPSiBpJ2LLECyOqqbvlW9gmjCygAkfrVGlc5qfn8PDz6DVn95vlW/265aOxvRuMdNdsUb6htLBlKqIqafMkVAANSKdAD8wP5cndPw82T172tnt2dV9w9Ndo5Ctwm1u3Ok92Lu/ZT7gooDUvgchOY4p6aokiVniLoFfSyg3VgGt55eudimW+WZZ1lFKrkcM/s6F3t374bB7ibrLtFtb3O17rAniPHcKVZkNM00AUNfInz6IPRpSSVtFHXzy0+OkrqJK+pp41lqIKBqhErqiniPDSpEWZEPBYAeyG3EQuAkn+h8f8PUubiLpdtuJNv0PIEYRmSo0yEYp3JXiOr297fzdH6bzuxulP5bXTnV+2fj9tXbO2sHPj9+dH7Y3p2b3XudqSL+8+Q3nJlYaqtkNVPqgjjhk1Nq12BKqo4XmK7UxRbSgLAgEkAnT+Imvn1hu/sPtO9puPMXutusq7nJ4jahP4UUSVJRlWhyuPxEnI9Ogz/nYdSdU9b99dMbs2DsLCdOb17u+Pmw+2+7OkNvxw0mO6v7M3JQR1OWxMeKh4ojMzSySUqqqq8ZYKNXtFzja2IniuuE7AEj0NK+nQz+7Bv3Mu58p39luU31drY3JhtpZQR4kQNNQqV1aeBPyznqmhvqR/Qkf7H839g2rMSzcTnrKN0WNjGhBVagU4U+Xy9OrW/5HP/b1r4bn+m8t+f8Avmty+xNycK8xW/8At/8AjjdY+fejp/rHb0PlB/2kw9fTXX6/8k/73x7muHgPz/ydcbKUcnrL7Ude697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917rq/1/wAPfuvdU2fzr/5svX/8qP4l5zsWeXFZ/wCQXYUOS2p8d+taqdHmzu7jTBJ93ZmkX1rhcGJFrK6QgCVhFTIdcwK+691ry/8ACaH+U52H3N2PmP50Hz4hyO8uy+0M7m95fHjGb4jNTlMjl8xVu2W77zFJWg6A3rpdsw6VEcINSgCfbEe691vWKPyTqNrX4/r/AIe/de65e/de697917r3v3Xuve/de697917r3v3Xuve/de697917qr3+dX/26U/mJf8AipvcP/vLz+/de6pl/wCEZv8A26v7C/8AFtuyv/eF2v7917rbc9+690C3yK/7J/70/wDEN9m/+8dW+0O4/wDJMm/5pt/x09DH2+/5XvZP+e+0/wC0iPqpP/hPB/273j/8TV2L/wC4eM9hT2//AOSG3/NV/wDAvWS334v+nzRf9K62/wCrk/V6ZYAE/W3P1/2PscEgCp6w464GVbE2b/bfX/W96VgxoOtkU4mnXYkv+P8Ae/8AiB72WUGlevY41671/wCA/wCTv+Ke66169j169r/wH/J3/FPfta9ex69e1/4D/k7/AIp79rXr2PXr2v8AwH/J3/FPfta9ex69e1/4D/k7/inv2tevY9eva/8AAf8AJ3/FPfta9ex69e1/4D/k7/inv2tevY9eva/8B/yd/wAU9+1r17Hr17Uf6f8AQ3/FPfvEXr2OuHltc6fwDpJ9Vvybe7516etcH0mn+HruNyxa/wBAbD/e+ffs1IIpTrXdU6hT0zWv8sdZffut9f/Q3+Pfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691jLNeygN+eCOB+Lg+/de6J18svnt8WvhRsiq318he1tvbMxMK1KpTfcLlMrNUU8erwDE41pKgFrqATH/X+nv3XutIz5y/8Ka/lT8xt3ZX46/yz+sc5RY7M1Mu34t9U+P8A45Ubipq0/amoopDFE+OurFVe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0MPvvbmPzkUccuT2znY/LjcjTtEStj+mRGIZGuGAII9q9w2y8254zIKB6HI8j0F+U+euW+c4rmTlWRZTauY5NJBCsDQg6TgjgR0Ctvr/AIf7z7Qse419ehaBQU66/r/UfUfnj6+9dbp163v3W6dLTYXXO/8AtTctJtDrXZe6N/bqrVL0u3toYSvz2WljHDzmjx0cjqguLyMdA4uRcD2strKa5uKW0FT6Ur/k6Jd75l2blG0O873OtrDjucgD5cSB/PpR9rdE90dFZWlwnc/VW/er8rXxtLQ0e99tZTAtXxrxIaKSsRI5tH9vxubf2rXHu9zY3tq5F9H4ZOV8qj1yB59F3LnOvKfN6vd7JexXoVtJMZUiNiKhTpZqEjOSPs6v3/4S1/8Abwjtf+n+yf8AYfH5/wCZxbCtf2KuQKfvqQf8Jb/j8fWMP320MftRZAcDu0H/AGiX3W/X7mDrln1737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XvfuvdcHYqLgX5AtcD/XPPv3XuiE/P/wDmTfFb+Wv05W9vfJvf1HgRPT1Meyev8VJFX9hdkZuCMmLDbP26GWWXU+kTVbhYIFu0sgtY+691oJb17f8A5s3/AAqr+QNX131Zh6/oT4L7N3Gn3lEajJw9S7Hxwm1U+X7I3BAsJ3ZuhqcGWLGwWiiJCxRQq3mk917reD/ldfyePiR/Kt60h210vtwbo7XzGMpafsfv3dlFRSdhb2rEjVqmGlmiBGLxfkuYcbRsFUW8skrjWfde6tgVAot/iT9AByb8Ae/de65+/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917rRg/4XBf8yF+Av8A4l3un/3jcL7917rcE+FH/ZGnxJ/8Vk6F/wDfV4r37r3Rm/ejw691VT/Oq/7drfIn/qG2J/78bFewnzf/AMq5efZ/l6yO+6d/0/XZf9NJ/wBW26fv5d//AG6u6A/8V1y3/uHkPb3K/wDyrll/pP8AoLov9+v/ABIPev8Anui/45D18vak/wCAtP8A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OeiNfKj5bd4/Mnsw9p967qjz+bpcbBgtu4nF0VPh9rbO27RtqpNvbV2/SHw0dLH/AEF3c2LuxAIIdz3S63CcEnHD5f6vTqXOQfb7Y/b3Y02zl5dCO2t2arPMx4lyRUljWpNKnPRaLf7H62/1r8cey09pIPljofu3iuXChaknSMhflxPDhxPVrn8jn/t618OP/Dy33/75rcnsT8nEf1hgP+n/AOON1j396MH/AFjt6NPKD/tJh6+mqrA2II502/x59zXCCAK+p/ydcbCQWPWf2/17r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917qFka2ixtFU5LI1dLQUGPp5q2ur62oipKKioqaIzVdZWVdQVjiiijVneR2CqBcn37r3Xzf/AOZ18s+8v+FHP8yXYX8tX4RZis/2UXqreNTUZze9KlT/AHS3HPt+f+Hb4+QO7GhUPLisXFJLR7bppbeeSQOi+SpUr7r3W/H8LPh7018DvjZ1l8X+h8BBg9g9bYZKQVPhijy269xVdqjcu9tzVCcz5LKVRkqamV2YjUsakRxoo917o1Q+n0t/h7917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917qr3+dX/26U/mJf8AipvcP/vLz+/de6pl/wCEZv8A26v7C/8AFtuyv/eF2v7917rbc9+690C3yK/7J/70/wDEN9m/+8dW+0O4/wDJMm/5pt/x09DH2+/5XvZP+e+0/wC0iPqo/wD4Ty/9u9YuP+a19if+4mM9hPkH/kht/wA1n/wL1kr9+Q095Iv+lbb/APH7jpr/AOFIEs0P8rPsnRI6CftfpCGQIxGuJ9/U2uN/pdTYXHs15w/5V+4+xf8Ajw6A33Use+GzfZP/ANWH6+dn+f6/0/3x9wX12IqeuwfweB/rfk8D6e9U9OvBvXr1weB9fpa4Dc/pOlrEf1593EZpk9UM0flnrv8A1/r/AK//ABP/ABPuhFMHq4IZajgeuNwb2N/8Lr+Re5/Nve3aMNpVNP7eq08UJocBIc9pz/L7Ou/e2Ug93n1tRGayRuX1mpJ9eFP5Drq/vWOvVPXdz791up67Frm/IUam+osD+n/b/wC8H6+6yEU/TWpHHqrMsXdK1AeHl176/QEW4PH0v9Ofp9Ofdxp8MVFG8+rKysNSGoPXXPvXXqmvS16zllp+y+s54JJIpouytgSRSxkh42TeFEyuhBBBFuCDf2ZbUabhan+kP8PQN9wV08h7qP8Al3uf+rLdfYAUHn+mtj/vJv7yH64Odc/fuvdf/9Lf49+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XvfuvdcWdUF2NgASSfpYDk39+6912CCARyCLj/AFj7917rv37r3Xvfuvde9+690kN6b+2Z13t7K7q3xuXE7X29haKpyOVymWq46aCjoqSIzVNQ4b1EIgJIRSf6D37r3Wo//Mt/4VYdGdFnI9Z/Cqipu9O0RJPR0268fDHmNl0VYjGIRVVDUeGpcrINRKIwKkWP1t7r3VGHUX8ur+cT/Pe35L2J8od6bs6m6MylfSZWnpt5z5iPYtbQLL9zLDtjBUMk/wBvKVQBS8SjXpbj37r3W5f/AC9P5Evwj+AGGw1btnYOL372RRwU0tVvnedBR5nKUuShVWebDVtVGJoU1qHQXuDyffuvdXVqoVQoUhVsqjgWVR6bAf0+g9+691k9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3VevzB/4/fan/AIasv/u2l98Vf7zr/p5/L/8A0qW/7TZesp/Yf/lW73/npH/Vpeikn/invmov9h/q+fU4jqrz+b58Ld3fOz4Zbl6f62osNVdpY3c+3d4bBfcGThxFCuRxVXpydHNk6m8cAqaZmjLsLAC35HvKX7nnvDtHs/7sW2+cyXRXbpkljnYRSmkckbBDQA1Ikof83HqP/cvl5uZNh+jswDdcfz+3y/b0Dv8AJG/l59h/Af449g7V7zxe2oe1u0N/1GZ3HHt/NU246FdqY3HfwrB4mXKUw8cqsGnnKclTIQbngDv76fv9s3uz7i7decl3DTbbssClHKSIwlkaslA9PJFHaDgfkCz215NvuW9luLW9FJZgKjHlq/z9Vk/Hf+RZ3v1d/NapvkRuHF7Om+K20u6d19p7Wrqbd2Pk3FUiWSbObUp22ql6iLw5GVLqx9Mcf15HvJv3B++TyFv33X35X2i9eTfLywt7V4jHIo1BQjd5UA0A8yOJz6gbaPbm+t+fDuLgCMuW8q5p/s/y6M//ADgv5Xfyh+RfyQ6U+ZnxDy+08p2T1VBt6mrdk71raOjpBWbUyv8AGcBncUMkGpZ4zIPFVUMgBfhlYcgRd90f7yntzyX7ebn7Z+6AaCzvTKxuI1Z/7UMrRGJVkaulvjoVqvwkHo+9w+ReY9w3qDftvkq0IAGcgCnnWvl0Sv5sfywv5y/zwPTHYne+a6Ey+69kV1Vj6LqrZmbxezto7BwDz01ZPmzW1M1QK2vyEiHzRxOwiEYA030+509rfvFfdP8Aahb/AJb5Ja4gguVdxcSQOxmkORHpS3iCCpJqxqfMjFAxvHKHPe/XNnuW4P4ixSx41cAPPLMcAenR3v5tv8tb5SfMLtf4Obv6Uwm0K/D9DYvDUvYMm4N54zb9TST0WawtbMMbT1gJqgI6Ko5j4NhYXb3Cn3YPvJe1ft5y3zjt3NkxtrrdCTbhYJWDnw5VAJVCFywFSfM+mRNzxybvO87vYXW2rWOBlL5ApRhX/AfLp++eH8uT5Md//wA0n4b/ACv67wu0qzqHpWXqZt81+S3hQYzNUqbQ33Ln8wKDA1Q8tQUp3Bj8R9bcAXHtJ7H/AHhfbPlX7uPNHJO6Xjw7nfm48GERyaavFGqUOjSoJBJyfXHDrXNHJm7X/NlhucQBhiI/IA1PWwo5vc88m9+L8m4+v/EH/W9837m5/Xa4nTx469w8zXhx9DQ8Dw6nONnRy3npI61IPmP/ACvf5ouT/me9sfOT4cjrjANlc5gcj15unOb62pT5SnhpOu8ZtPJNU7dz8EyKTLTVCATRk6SGB5B99iPaH7yf3crf2F2X2s9x7ltdta+HcwNazSp+I0LJGykFWpivmPKvWMm/ck82LzDLuu1L8TE8c/4R0mN1fyh/5vvz03js6h/mE/JjbWL6s29lBW1mL29nMHm3pYBxNLhNrbSpqPHvXOpaKKqrNfjDG5IupUp9637q/snss0/s1tSC6mUqGjgltlYkYL6ogxAIBNNOr1FOqSci848yXEc/MMlI1IUg8aAj1Y/4OtrTpHpzY3x86l6+6V61xceJ2T1ttfHbWwNGoCyyQUMYE+SrWjA8lRVS+SonY2vIxPINhyZ9wecN19x+c73nbmKXVJdszICeBY1AyW/ZilesiNs2u12DbYLGziqMKSKY9TgcOhTX9S/6/wDxPsIWf9tF/wA1U/w9GKmvhf7b/j3VQf8Awpr/AOZAfy5f/Kt/+8ztX39GvI//AE43lz/min/WToq+6L/087mb/Sj/AKvN1qBn8e1b/wBpL8x/m66HRmsUK/0Sf5t1jkQvG6AG7oyi3BuV45/H+v7aXwvqFkPAHqsimSyiCSGR1dj3VHFdPnT/AA9bIXZ3yF/lM/LX48fDTZHyD7y+RnXu+vjZ03Rdf5Gg6+6nmymLqsjNHE+TAr61ZFlWOSMpHJGbMDcge5Bnutl3Oxtob5sw1I7fX/Y+XWD22cp++/JnO3MG5co7bbXEW8XBb9eZEqquXWgMqZz6k0pgdB7TfPL4CfBHrHsXbf8ALT2F2zvDvztbbmS2dlPkx3tNDj8tsHb2Up/t6k7EwFFFCIZQT5YRoGmSzSSShVj9sz7pYbTHXbsn/P8AIDo/f2v90vc7meyvveC4jtbSzZT9JCGkQgZoSssy0wDQDyoRTHU/+Rh8tepund2b06X7Gy24P9I/yY+Q/wAPcJ1wKTB1mUospmMX39hchlZs3loCEpNRN9UwOokm5+nu/Km6wm6kVj3TMh/Nnr/l6r95r223rdo7XftihX6TZ9t3EymoU+AlmwXtJBqFB7SBQeVRQ/Qs9yx1y2697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de6wSzCMi5UKLlizhQBYszMTwAACST/yP3XutMv8Angf8KWIem8/nPg7/ACyKpe2vlLnK19ibp7e2hjv744brjcWRlOKn2n1nRUqzLm90rI3iWaCOWnpJTYeSojKJ7r3Sc/kjf8JqqzZ26MX88/5qVLV9qfJDceTTsHanSO+aw7rpNoZ/JMMlHu7uaXImYZfcKyMJFx0zvBSyf54STIBH7r3W6vHDGiRJGFSOJFSNI1CRrGqaVRFSwAA4AH0HHv3Xus/v3Xuve/de697917oivzJ/4G9e/wDUNub/AK20HvkV/eif7m8nf80d0/4/t/WSfsD/ALjbr/prf/BN0Sk3/H14t/r++T6kLCGPl/s9ZCYIo3DrVH/4Ug4DcvSPZXwd+e3X8McW6+rN5z7Kqq5yVEs2Kr23vtikrmis6wsPv4HbVyJrcn31d/u6uYdt5s5b5k9pd2bXFcoblQxr2hkjdQtSKAup8q06x897rOfb7iy5gtF0MlFDDicceGK9BT0N8Ha3sr/hPb8gN0ZPFms7Q7u3Zuz5dY6pZWqcjPUbErnp8IkAca1lqKKDIReo+pJ9annkcc4e+VvsX33tm5TtJT+69ugg2x4w1FEsolV2KjA0CRCBmpWmK9Itt5aN97Z3N7PX6q4leWtKsBRCBxr+Hjxz0jv+E9w338tPm73V8y+0RJms1070Bs3q3DVxKvDLmKvb9LsjB0ZM9z5P4LiZQGBFmNyRf2Zffs3DZfbz2c2/2u2VhBFvl9JLJwQIgmaYjSMNqcg1qMr59FXtRatuu/Sb9uQIW1j0gCpyAKGtQQeH5HoKcH84N5fLP5UfKHA/O3+Y73B8ENg9UblzFFsHqjq+lm23PkosPmqvFy4DGTUlLKz5CCCngcipR5KmWXUhUce5Bi9sdr9ufbvlse2fJO382y3scJuri5A1xhkQtKGEMxABLUFVpppqrXpFJzHJzBvd2u+7jLYpCWWKOJVGqhIUE60JJ+wnPSs/4T4zY6fvv+ZnUYnMboz2Nk6Q3FJjc1vfWm8sxjW3XWGjy+61dUZa+oj0TVQZAfIxBUH2G/vq+PHsPIc3hxWtxFuKsIlasaERoGijIWhVCaAgAYx0Ye2Xc29XCu0gUfE4oxGaEipz+Z6DH+XEF/4ZR/nEFWB/3NR8XQXB2zDYgk2PHPF/969nvvs0g+9Z7ZBqGsTVC5OZloaYFB+I1qPQ9JuVXj/qDvI41lJr51C8PsP8uthX/hPp/wBuqPj99P8Aj4e3jf8A8qTkPfPr7/zwn7wu5KSaiC2BHlQR6q8f6XDhjqW/aCv9SoWNa62x+Yoeq1P+FTtZT0GB+B1bVv4qai7I7SrKlwpJSno6Xb000mkc30gkLa54sD7yN/u1bS4baec4lFWdLVUBYkHVHNpORivmAKDoGe+kyi+sY3NUVgxb7RWn5dCz8o/+FC3wuxnxX3DsL475jeXa3dO6Oql6529iW2RuHbuFwOZzW0v7sz5rJ5PMJB5VpHdpIoaXXJI6oANJJBV7ffcP9y193k5x54u7W32a1vWuf03JldBLrCsuiMAMuK6yFNT5dObn7r7cuwDb9vQzSyRmJkrQfDQGor5mtKdGF/4TwfEvsP4z/C3cG6e1sDU7Y3j8huw5OyKXb+WopsbuHDbSx+FjwOBXM01UFkgar0zViQOgZUkUkXYWiD+8E9ztl5592dv5d5clFzDssDQNpIKM5YlmDAn4fg8wdIIND0JvZ7l+/wBm2Ka5ul0fUuHFcFRQCnDP+Tq/Bf1L/rj/AHv3gfZ/2yf81U/w9Syv4P8ATP8A4V6pD/4U4/8AFm/l0/8AiLu2v+tmz/f0bcpf9Oc5W/55o/8AAet/dB/5Wjmv/moP+Pv1qhf8U9qgaMxGT4n+frPeRtEYbOIxWgqeA8ujSfB6/wDs5nxXt+O/OsDwL207rpiP8bn/AA59rNjr+8YVYUEbVr6/b6dR97vCOf2/3RJagCwmYEgVJMcgpSv2Gvz6sq/mc/BP5odufzGvlPn+tPi93XvbA7p7TqavbeaweyMnPhs3Rvi6WMVVBl5glO0ZI/WZNP1549iTfdq3G83qfwVrE+ihz/CK4p69Qj7H+6/txy97U7RYb7ucNtLBFMJFMlHX9Z2A04B1ijZI49LX5XbVpP5eP8rjAfA/fubwtd8pfkv3Xi+9e4Nj4DNUGbPU+z9qUkUW38BuafHPIsddUSJSssLMdTJMwOlAWfmWLbeX22wsWkaRG9KAGp/1Yp0Q8l7juHu/713fuZt0f0+0bbaz2sBKhRI0isAQR5Nhq1PoCadHp7FV/wDh9L+VSACHb4ufH0gKh9QfrbNk8Afg/qJ/H1P19m0715g29waDQn+XqMNjjp93TnG4kPDcJ1IJJKnx4uB86/l59Vi/A4E/z2tlnU5J+Zfa12bSzM396M0TqLci9yeTfg8eyHbNUnOc0ZODK5B/2xPDqc/cbwbP7r1raRoNJ2WKoIDUb6eMlwxyDU1oOHWf4KeQ/wA9zZrfrkT5TdwyamJZ+afPsxOsXP0Jtbn6CwFvfrBv+Rosh+AErQedAem+f1RPurm3kWpENv3Voa+JHmgx/PqrT5M3X5KfIocr/wAZ67lJDA6hfsjJ8MGAN/8AX9hncvCbcNxOkEajTPz6n326NeQdjtJgC/0cXh4AIpGp4jNejZfHn4Yd9b2+M2b+a/xZ3znNwdm9Ldlvt3dvV/VkGUXuPYmDmxYqsd2Vi2wzmqlo6hWli000Xksj2DDVY0sdluPof3pZyd4/ABX08/8AY6j3nX3Q5e2rnB/bTnW0CW15Qrcy0MDV4roPbUU8xwOOBpaZ8acv8lu1f5ffz2zH8y2Df+e6B2v1dFP0XvP5D4itoOw8P3y2SWDCY/q3Kbuggy5EqtpqkjZlYlVGpWYexJaPd3WwXSbyKtqHhk+QpkLj1+dOoD5xi5W2T3d5ZT2ekQ3DvS7itaCJoSctLppSgpQFMmnd5dJ7/hLOWP8AMF7ULm7n4e9g6v8Ag3+mDYN/p7Q8hrp3qVQKAQt5/wBOPoXffWjkPs/Zux1ad4gXV5km0vzw/o09fP5db9vuXeuWHXvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+6910SB9b/ANeAT/vXv3XukpvPeu0evNrbg31vvcmE2dszamKq8zuTdO5MjSYjA4TE0cZlq8jk8lWskUUSKDdnYAmwFyR7917rQs/mpf8AClfu75c9hyfAb+TBtze25MxvvJy7IyPe2zsHVV/YO/pqqU0dZjOmMZCjPjMeQT5twVCLKYryRGnjBlb3Xujy/wAlz/hL9sn43ZXC/K/+YwcX3z8nq2aLc2D6vy9YN1dedX52rcV8mZ3XV1hk/vLuJJDqeed3pIXuUSaQCce691uKQQpBEkUaJFFGipFDEoSOGNV0pFGi8Kqj0qFAAHv3Xus3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de60YP+FwX/MhfgL/AOJd7p/943C+/de63BPhR/2Rp8Sf/FZOhf8A31eK9+690Zv3o8OvdVU/zqv+3a3yJ/6htif+/GxXsJ83/wDKuXn2f5esjvunf9P12X/TSf8AVtulX/LZx0mZ/ll/GrC07qlRlehJsbTu/wChJ8iK6jhLG9rBpBf2o5aBPKMBHHwiP8PRP94KRbf37365mP6a3keofYkLf4BTr5kG/wDr/c/U++d3dYb2xdZhN29f7iy+0dw4vIwSUlXSZLB1z4+XzQSAFRJpV4zazKykGzKTDN9ClpuMzXKHU1QCfU8OuwXLG7WXMGxW+72E6yJJGCoBB8vkT0kDqH0v/ZNv6g/X2gxx6OT4w4deJY/k8i3+8397x16s3Xd2/wAfr71QderN11z/AI/S3+v/AF+nveOvVm4dd3P+P/E+/de/Wp116v8AH/Y/8V9+OevVm8uu7n8i/FuR9f8AX9+x179br1z+b/UH/H/b+9UHXqz+vXiWP9bfj/iPe6Dr1ZaddXN/9749669+r1yH+vx/Un/bj/X93heBkbWOBI62BItI7bDtx+3z6uh/kBdV7w7C/mf9D7l27jKyrwPUVPvvfu98rDTvJQ4fEybEye0qFK6oX0xPU1mSiihVvU7AhQbGwr5LtXfdfFK9kY1V8q1HWM/3sd6tdn9n77brqdWlvXihVAQTUOspNKk40HPoevpFoBdPqADdRYfk/Tj+nuayNZEnXIEkDsAx29S/e+nOve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917ro/Q/wCt/j/xHv3XutI//hTx/OA3guQof5Q/wdr8xurv/uWrw20++cj18ZqvcGJod3TRQYHozbc9AdQy2cEqfxcRm8FHIsLsjTSaPde6ud/kP/yhNqfypfirSYncdHisz8o+4KfF7l793tTxw1LUNakOvE9Z7eySi/8AC8N5HUmMhZ6kyTMCPHp917q9T+vv3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de6q9/nV/8AbpT+Yl/4qb3D/wC8vP7917qmX/hGb/26v7C/8W27K/8AeF2v7917rbc9+690C3yK/wCyf+9P/EN9m/8AvHVvtDuP/JMm/wCabf8AHT0Mfb7/AJXvZP8AnvtP+0iPqpH/AITyf9u9Y7fjunsQ8/1+0xgP+8ewpyB/yQmr/v5/8C9ZK/fkH/MZIj/0jbf/AI/P00/8KR7H+Vn2Hb/n7nR9/wDX/v8A0/s05wqOX7gfJf8Ajw6A33URX3x2evpP/wBWX6+dofcFjrsQ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4x/0D17/AIOHn/8A6M+3f9nX/bR17/oFU+Hn/eR3ye/86Opf/sa9+/qBtv8Av6T/AIx/0D17/g4ef/8Aoz7d/wBnX/bR17/oFU+Hn/eR3ye/86Opf/sa9+/qBtv+/pP+Mf8AQPXv+Dh5/wD+jPt3/Z1/20de/wCgVT4ef95HfJ7/AM6Opf8A7Gvfv6gbb/v6T/jH/QPXv+Dh5/8A+jPt3/Z1/wBtHXv+gVT4ef8AeR3yd/8AOjqX/wCxr37+oG2/7+k/4x/0D17/AIOHn/8A6M+3f9nX/bR1kp/+ErHw3hngll+Q3yaqYonDS08tT1UsdQmq7xyNFtxXGoXBKkEfUEH3o+322VxNIPP8H/QPXpfvw+4EiFBtG3KaUqPqq/zuD1eB8Pfgp8cPgzsKXYXx+2PDt6HJtTzbo3NXOMju3d9bTR6IqrceckUSTabsYohaOPUfGq39i3b9stNug8GBfkSeJ6xi589w+ZvcPczuO/TY1FliSojWopgMSSaYqSTTo4CxBTfUx5uL24/wHsxrinQFIUgCnDrL711vr3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3XuuJYA2Jt+f+N+/de6ob/n1fzgto/yqfi3kZ9rVuLy3yt7pxeX250Ds6aRJnw0zRGiyvau4aANr/h2F1h4VYBaisEUF9JkI917qoX/hMX/J83djKiv/AJt/zapMhuj5Bd3z5XdfROF3rFLU53beH3RPLUZnufccdeLrl875GGJRheno7zrZqiPx+691uuoDbn6/nm/P55+v+39+691z9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3VXv86v/ALdKfzEv/FTe4f8A3l5/fuvdUy/8Izf+3V/YX/i23ZX/ALwu1/fuvdbbnv3XugW+RX/ZP/en/iG+zf8A3jq32h3H/kmTf802/wCOnoY+33/K97J/z32n/aRH1Uj/AMJ4/wDt3sn/AImnsT/3ExnsJ8gf8kJ/+az/AOBeslvvyf8AT5Iv+lbb/wDVy46aP+FI3/brLsP/AMS50f8A+99TezXn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7917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de60YP+FwX/ADIX4C/+Jd7p/wDeNwvv3XutwT4Uf9kafEn/AMVk6F/99XivfuvdGb96PDr3VVP86r/t2t8if+obYn/vxsV7CfN//KuXn2f5esjvunf9P12X/TSf9W26EP8AlbzJT/y6PifOwJSn6dopXsf91xV1U7f7wPbW0Xn7u5Li3HTrMMDPT/Shm/ydEH3jImk99t/KnLXSrT7YYugE3xvfM793BW5rLVcksck84x9IrE01HRhyKeKnjNgPRbUbcnm/v5yPfD3a5o90ec77cLq/fwGlJWE00hQeAAXh+fU+cocq7Ry3tEBjT9aRAx4k1pWp6RvH9D7hQm5rg9CvSOu7/wCv7r/jHr/q/Z1ulOHXr/6/v3+Mev8Aq/Z17r1/9f37/GPX/V+zr3Xr/wCv79/jHr/q/Z17r1/9f37/ABj1/wBX7Ovdev8A6/v3+Mev+r9nXuvX/wBf37/GPX/V+zr3Xr/6/v3+Mev+r9nXuvX/ANf37/GDiv8Aq/Z16nXViQT/AIG5/wBT/jb3eRZnjBik8N1yD/qHWl8JKhuDcfn0Zv40b9y2K3vj9oSVk9RhM+lXDFRzMWSjrqanathkpVbhdQjZWC2HN/rz76IfcP8Aerme090YOQt2vGuba9t5I44zQgSJ+oGGAfhUjiePUH+7nKu1NsD7zZR6ZoXBY8CUPaRx4VI/PqxtCDoP5LfQf4Hm/vt2oV4UNP4T+zrFoFR2jzFepXtR1rr3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917pm3Bn8JtjB5ncm5Mvj8Bt/b2Kr85ns3lquHH4zD4bF0r1uSymRrakrHDBBCjyyyuwVFBYkAe/de6+bZ8ze+O9/wDhUN/NH2h8N/jBlc7g/gt0PmMhkqjeCUtZFgIdq46uTHbx773WjDxPW5IWx+1aKf1aZF0LeWpI917r6FPxf+NPUXxB6H60+OnRO1aPaPWHV+26Lb2BxtNGn3dbJEobIbhzdUoU1ORyE5kq6+qkBeSaR2NhYD3XujBj37r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3VXv86v8A7dKfzEv/ABU3uH/3l5/fuvdUy/8ACM3/ALdX9hf+Lbdlf+8Ltf37r3W257917oFvkV/2T/3p/wCIb7N/946t9odx/wCSZN/zTb/jp6GPt9/yveyf899p/wBpEfVRv/CeUMf5fEVr2/009iXtx/yh436+wt7e0GyPX/fz/wCBesk/v0Bj7y2+ny2+2r9niT9Pf/ChTYe5t9/yt+64ttY6ryk+0d0dXb+y1NRwS1U8O3Nq72pqzOVwhiBbRTwkzStayIrM3pUn2b80RvLstwq8aDyqMN1G/wB2C8trH3w2eW7fw4neRdXClYXpT7SKfn184gANyLkWBufob8XU/kfi49wQkcqyMGZfzH+x12VM8JiWWVaBso2ogN6cP8x64kgXFx/txx/tvbixtTUEr868fn1pg0hrIY6+mTT8yvXiwNjqFx+eOT/j/tz7tof+D+Z62QxzrT+f/QPXQZeORxf+n5/r78EkBqEz/pj1cvMSGMq1HA1NR9hpjrstcW1C3H1sTx9OT70IjxMdfzPWiZD+NP2n/oHr2r6esAC9gNNrH8W9+8N/4P5nqpDsKM6ED1r9v8PrnrrVz+oAD6ABbA/k+9hGBqIyP9serVl85F9eJ/zde1L+Sp/23+8Ee/aH/wB9/wDGj1QoS/iFk1evn+3TXrxYEWutrWP05HvXhsOEf8z04GlAp4i0rXiePrw4/PrvUPwwHAA+g4At+PfvDetfD48cnI6r35707uPHP29vXgw/qP8Abge9CJhwj/n14agKa0p+f+boafjh1/uXtX5CdG9dbNx1TmNz7u7Z69xeIx9JC88ksjbrpZp6lkiDERQRRyTzyW0pGjuxCqT7X7RALrdLBrckqjDVxzkVr/g6A3uZulrtXt/ue53Thbd4LlBqoDUxED+Z9evrkQ3/AHCSSTJ9eNP4vpsfp7yE7tRrw8v2dcJQACQoIyeJrX5jjjqR791vr//W3+Pfuvde9+691737r3XvfuvddH6H/WP+9e/de64N9P8AYn/ob2239qv+ryHXuvlz/wA33/t5983v/E45T/3QY/3CPN//ACXJvtH+Addlvux/9OX2f/SN/wAfPVcXsMdT91br/Iqhgqv5oPxuiqIY6iFq/dAeGojWeF77Xqit4pQRwBYk3+gI9irlOKEbvGktGLEAeY4V/wAnp1jv96KV7L2i3IWZaMqEBIZlNSwIIofka8Ps6H/ur+d38++uPkN25tSj3b1nuXZ+1Oy92YDHbR3X1DsvIYmbC43OSUtNRVMtHBTVDEQqE1iW9ufz7W7lzDLFupESHwx2UoPL5Z9OgZyX93jk/f8Ak+wv57iaK6uIwXkE8+Kgmq/qjNf6IFOuPz22N0L8xvghs7+Z50j1htvpTsTA9gHqf5YdabSDwbUqtx1axw4/d2FobAQLP5IJQiINUc66xrjLu9uMFrum2/vW3jMek6TUUzjhQnjX+R8sdJfaje+Zvbr3Nn9o+bLlr2xuInltGkCgiNRIQJH0q9aIRUM2aD1PRcfmF0X8sq7N/wAvDrjv3v7HdpQd8dP7VPQiS0jw0fU+ytybjpcBQ7eyyQRRNUSxM8LPOC7+OMIH9I9ld/DuTxWNtOUKzIojycDy1duOPlX7epA9uub+RbU82cy8v2TQNtd1cfVMeMskYq7RVlYOGAGlm0E+dOhtrf5F/YG0e2ct053B8wPi/wBK7zqdww4DrbGb6y+RgyvbJqaSFqLMYLDRzCopKKpq5XoaWWrYGWSN1jDWA9qX5UmiuPAmkjU09W8+H4f59Bq3+87tm57O292e2X9zEauWjghJRE7nLAzgGi8QCSPTpEYX+S72xt3cWZ2x8ovkR8ffh/lE3VV7U2DR9vbglqsh2iaOcU53LtSgxMiuuHlkZUgyFSUWQtpspQk0TlKS2fRdSRgvwoxP7e0UGfTpXcfeQ2bc7OG+2Gxvr5CoZ/AhhbwxQEiSs6qGX8ShjSnRDvmJ8QO2PhJ3Xluku3FxFXl6XG47cG39ybbqmrdt7w2pmIBUYfceDqZPV4ZlurI5LRuGRiSLkj3baZ9muxaTFWqAQUNV7s8SAceeD1MXt77hbN7j8sjmXZPE0B2jdJFVZQ6EggqrsBw/i6KsRdb8aSSt2K6b21Aeq3NvoP629l4QmXw1IZh5Dz4YHzz0PUddIlIIUGhNOGK1OfLraV/lobQ2v/Lo2x8ZOyOxNu4fK/Lr+YB2bsTZvV21dx0UNZL1T8bspuemi3BvbI4+YXiq81ASKXVpLJJCLHSVMm8vwrt8y2lyh8WZe2gqAB6k0yaU4H+fXP73l3zefdi+3Kz5cnaPaeX0YyTRmizy6gdMTJXUFDVIYp3Aj8JrT5/Nnihg/mP/AC6hp4IaeBO2MoIoaeNYYY0NNEQscSAKAP8ABR/iL39g/mKIJuskIohTBr5mpyPl1kv93gyP7N7NLK0kjiIh2fLM2o1INTUcKEkE+nVdxHHsgHx6R5dTShEqnGnjx/1How/xC/7K0+LH/iyfRH/v1sR7M9l/5K9r/wA1/wDKOgJ7l/8ATvt3/wCeC6/7R5OvrXJ/a/4MfeQa8PzPXCfz65+7de697917rBUfoUW+rgA/W3B5/wCI96Or8P5/Z1V1DRsCaY6q+/m0YrGSfDrsGvmxuOfIJBIqVclFTSVSqaKW/wDlDKXHA/B/3vgLc4W1rJtru61PqB506yR+63uO5Q+5VrbW88iwEHWtTkahwWtP8HUL+UbisWvw769r0xuOFa1NAprVoqWOqK/ZRMVadE18Ekg6v8PbXJUMUe0xOq0ZkB4fb0s+9XuN8/uzfWJuJTBqIRCe0DSPw1pxr1ZLvL/jz92aQBbbe4F+tyD/AAmW5A/4r7S+5TO3tzzAGp/yTr3/ALRpesc9gou72qxig8eOteNda/t6pvHCp9f0fke/lsuf9yH66ERCrr9q/wCHoBvlH1LD3t8cO9en51BbsLqrem3aB2kliFPmarCTyYOuWSEgq8FXHBKhPN1FuPrIHs7zJDyl7ocu8x3OYrK8jkkXSrakEqlgVbBxXieibmazkutlukszSZlbJwuK+Yr/AIOta7/hNz8hW2R0L82up+xctkDL8ftxVnaclLXTyTT47BRYeqx+7Zh90xKv9xjYQFFhcE2J99Kfv1e2R5o5z5J3zYIo1/fUkNmcFFrIytGToU/hOeJFBxx1CPtPuoS03Tbb5m8S1R3J4igqOJNa1r5UpQ16q3/lCfLTfmP/AJtu1u3d/wBbuCXa/wAv989t7OqK+vqqpcLlMvvasnyGNqY5Kl9DLR5B6UMq20khbgH3kn96P2r2bc/uy3ex2NrE0+x2sTr4agS1jCh/hANSprk5Aq2egVyFzVeRc7m7kZjDcuygE/bpwagYFSQej8/NynyvzO/4UM9C9A0OQq8js7p2k68x24qDG5Cogp2xW2DU9mbwWoEDqvmBqfC7MNXAU/QAQT7M7VYe0/3Jd05sv4xJc7w00gJjQuGlMdmijVQEAREn5EmhPQq5hubjfPc+K2WUxi3iAajHS2ks2KcahhxHEdWKfJT+fx171v3bvfob43fG3tT5Ybx67r8nQb2zGw6Wr/u9jqzC1H2+4oqKLE01VVzx0cyTRPU+NYQ6karD3BPtv9w/duY9mg569xt5t9pjvh4kKOxViJVOjUpSMKchgKtUEEdDHfPdU7UBtWzWs0zxUDtoUgeRoQzVx6gdGr/l2/zYulv5itN2FtjbW1Nz9U9udc4yWp3V1xvKaCprTjJVko5ctiK+n0eaKKdTHPBKiyRm2pbEH3GnvH907mr2B5g2fmCK5i3XbZrqILcIWKks6UBGgAV1YNTUZBPAGHL3PO3832s+1WokSZEJPiBQOB81Zj5Hy4+fVEX/AAnNKjvz+ZIRc/787NIbgXOneVXqB5tY8i39Pz7zV+/FDF/Vn28PpOpxkYWyPn8/LqN/bcLPum/CrcF/4yZgfP8AZ0JX/CX9r9lfzEVAGobo6z03NgB/eHdpRR/QXtcc+wT/AHjss55C5HVSNJjnIFAOENmMkCvn0Z+zIE+7bsJmYhG+3LM1P+Omv5dXg/ziZpYP5aXy2lgnnp5062QRT08rQTR/7+CjF45IbEXFh6bG4vc3I94X/c8s45/fjYEuYtSrOGIdaivEUBriuf59SZ7lSOnKk7ISoRa1X0pjjTI61ff5Zv8AKo+JXzG+Ead790/KPefUHZVXvbsPbT+LsPbONwuGxO1mpBistUYPPOsjhhNIZC86q1hp+h99Uvfv35589tvc+35W5V5Ug3WzmWEkrCa6nA1BSgy/Ginj/EOHUCcp8p7RvGwS324bm0MvdoVnIGoEgDByafb0cj/hOLvjuyi75+XXREHYm4u4fjD1vBkKTaO+MhU19btf+8+O3m2Kw2W2pUV7S+AZfHq9U1FHLYJaYi6aveP/APeIbPyQPbnYuZJLK323e7wqWhUeHIFIDPrVQDVGJSpBJwCcYFns/d7um7XG2mQzQR8CTUfkSK/4PPrbnNtIIt9bcAgcADgNzb/X5/r75I3FfCYNxqP+PDrIo0BOnhTozHxP/wCZnyf+Grlf/cqm99DP7ub/AKfPc/8APLL/AMdbqDfe7/lXbf8A046sn99yOsWeve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de6+cD/wAKZf8At7n8Sv8AxKHWP/vT4n37r3X0dKH/AIBUf/ULT/8AWoe/de6ksbAmxP8AgOT78aUz14Z6rr/mkf8AZHfZrfgULXB4P/AaUi3sN8zKTtTRr616nn7uGr/XU28gVCuGP2AjoNf5N/Hww2W348gsPzxSRk8e2OUZlOyKoBw7j+fR5969vE93LtlBo6RuPsYHB+Y8xw+Z6tWBOoXH1Ia/0A1H0gexYKEV6xp1AyafQdSfeut9e9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XAuoJBIB/AJt7917qjr+cb/PE+N/8AKc64qKDK1WN7V+UW6MNUVPWHQWLyqx1paVDFRbp7GrKXytiMLHKCdTx+ep0mOnRrNInuvdanX8v3+U784f8AhQV8g0/mI/zRd6bt218Zqytjrdq7dEVbgcj2Tt+CpaSk2P07t6VtGA2tEFEc2XIeWoH+a88jNUJ7r3X0O+nOmur/AI/9bbQ6g6X2Lt3rjrPY2KpsNtXZ+1sdBi8TicfAmnTHDABrlc3eeaQtJK7M7szEk+690KXv3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de6Jf/ADHP+3fvzg/8VL+Qf/vqct7917rVs/4RG/8AZG/zM/8AFmdtf++soffuvdbsfv3XuozsLyD86W/DWtp91PbHnzr1dBkN5Ej/AA9a4H/Cfpgu4f5g+ri/f9Fb8/TI5+/0/wBf3HnISN424N/wxf8An/rPf77bK+2cllTUC0mH56bbrZF8iXtfm1/ofp7kXrAahpXrn791rr3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917rC8mgj8j1Xt+CvIFv8fewK56q7BEMhOB1yLNYsASLDSADe/+w91XuODjqwzT59dXe/8AxRT7t17Ug4g/sPXtT/4/8kn37r2tPQ/sP+br2p/8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e9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3WJnKsBpJva1ibk/mw/wB9/wAU917rRI/4Ut/zXuwvkB2dhf5LnwAbK747F7G3Ni9l/InKbJmNVVZ3N52aKLD9D4WppL6Yl1mq3RO7iNEC076UWoPv3XutjL+S1/Kg6/8A5UvxKwvVlGMXnu9t9x4zdfyE7IpYFL7i3o1J+1t3EVD3YYjDB3paCO/rOudvVLYe691cQoI4PI5Fz7917rl7917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917qr3+dX/26U/mJf+Km9w/+8vP7917qmX/hGb/26v7C/wDFtuyv/eF2v7917rbc9+690C3yK/7J/wC9P/EN9m/+8dW+0O4/8kyb/mm3/HT0Mfb7/le9k/577T/tIj6qT/4Tw/8AbveP/wATV2L/AO4eM9hT2/8A+SG3/NV/8C9ZLffi/wCnzRf9K62/6uT9Xe5nB4vcGJymCzlBR5jC5qiqsZlsTkqaKsx+Rx1dC1NWUVdSzgrLFLGxSRGBBBtb2NpY4542hmGpWFCPXrD63ubm0njurOQxSxMGV1NCCMginp1rpd6/8JkfhP2rvjI7x6+392x0RR5arqK+s2fs19u53bUFVUzGaUYqDdNLUS0kNydEEcpVfopA49hKfknZppC6grXyFOspNh+997p7JtcO0SC3u44AApmRiaAUz3Ur9n7OgW/6BSvjRcW+VXf4+vH93utbf4XvQe2ByDsvm0n5MB+wUPR6331/cxiSLSzUegVwB8gNXDrl/wBApXxp/wC8q+/v/Qe60/8AqD37+oOy/wAUv+9D/oHrX/Bq+5n/ACi2n+8v/wBBde/6BSvjT/3lX39/6D3Wn/1B79/UHZf4pf8Aeh/0D17/AINX3M/5RbT/AHl/+guvf9ApXxp/7yr7+/8AQe60/wDqD37+oOy/xS/70P8AoHr3/Bq+5n/KLaf7y/8A0F17/oFK+NP/AHlX39/6D3Wn/wBQe/f1B2X+KX/eh/0D17/g1fcz/lFtP95f/oLr3/QKV8af+8q+/v8A0HutP/qD37+oOy/xS/70P+gevf8ABq+5n/KLaf7y/wD0F17/AKBSvjT/AN5V9/f+g91p/wDUHv39Qdl/il/3of8AQPXv+DV9zP8AlFtP95f/AKC69/0ClfGn/vKvv7/0HutP/qD37+oOy/xS/wC9D/oHr3/Bq+5n/KLaf7y//QXXv+gUr40/95V9/f8AoPdaf/UHv39Qdl/il/3of9A9e/4NX3M/5RbT/eX/AOguvH/hKV8arf8AZVff3/oPdaf/AFB79/UHZf4pP96H/QPWv+DV9zf+UW0/3l/8/VoXwJ/k1fEj4A5eTfWwqHcHYfb0tJNj17S7Emoq3N4yhqU8dTT7bxuPjipMf5V9EskMfkdbqW08ezra+X9u2qQywJU+VQMdRN7m+/8A7i+6dmds365WO1LFjFEGANQBQ1Y+gpgZ6tliRlT1kMxuWOnTf+nHPs+Ygmo6hPAwvDrL7117r//X3+Pfuvde9+691737r3XvfuvddH6H/WP+9e/de64N9P8AYn/ob2239qv+ryHXuvlz/wA33/t5983v/E45T/3QY/3CPN//ACXZvy/wDrst92P/AKcvs/8ApG/4+eq4vYY6n3q3r+RH/wBvRfjXfg/xDc9/6cbXq+P959irk+BIN7jzU6v+fD1jf96ku/tJurkUWsf+b/D0Qj5XMW+UXyCRFLO3cW/Y0RR63Z9xzqqxoNXJ+n9R9LEkD2V7gt9JvhMS1UykV/I9SH7ebvssXt7YLLMEMVvGzE1wPljjX5dXC5rZ+Z+J/wDIM3xtftqkfam/Pmp8hdv7t692Pm6aWj3IdmbPOOnfcEuInCvTxTR4vz6yATHNGLDWB7FpMlry+0E+NT1p+zrHdt1sue/vNR7zsxM9ptVo8ZNO3WyzAio8xrBoTgUNOhQ+e3/M8P5DQvweg+opBZmIJPZ2Ou3Nhzf6+7bsY2m2dUOAiAfOhHRdyGDccve5SyDwq399Vf4ezh5nolH86LMZTIfzd/kJUV1bUTzYPsTqyjw0kkzs+KpKTZmCqqWDHuTeJY5WaVNFtLksOSbp9/uZ4+ZWiJop0/ljHQ59hdv21fYVGaIMzQTAsRmjBqj86npef8KEK+uyXz6gFdVTVy47oLqCnohUO0wpYHxEtbJDCHuVV5XeR7EXYkk3JPtnmhngvICrHu0/8+9V+7Jt+2/1Bv5ZIhU3dwvrVPEeg4+g8ulZ/Prkebsf4LzzMZZZfgT0+ZpmIaSf1TC8j/VibAX/AOJPvfOIAW3UjuoKn7Rjpj7qqfT2PMht/wCziv7gBM0UeI/DzyPnWo6I7/K66S6d75+aPVe0e/d67b2V1RhJK3fG6qjdeUpMNidxQbWVMhR7TkrsiyxIK6Z41nV3F4kcC5t7JuW9us5N4UzyAH8/T7Pl1K3vjzJv+we3l7dctQtNNPHoAQAtVqL26iBUAk8fLrYO3P8ACftD5D/zOetPlvu35ofCfKYbbfcmxKjYPVe0uzqytzOB6z2Vm4RtLYe2cWtH4jWGjjUOkZCyVTyEHTp0juSya83ZLmK4FI8cf5DHz/l1hrtPuBY8rez937f2uzXqOySPLO0cdTI+WLHxzj56RgDz6qe/nn/GKu6e+Y3ZvbtR2r1XvKn7x7G3JlKTZezc7Pkt5bDFDTwa6DfGKaMLSyuXuqxu4ABH1+gU5v2lYbn66WQM7j/AaVOPOvWQX3V+c7rd+QNv2iK2lijskELGRVpIe5i6kMajyOAcZUedJpH14/2BFja39D7CY/RiEi5rjrKV/wBa4KjiASf59GG+If8A2Vp8WP8AxZPoj/362I9mOy/8le1/5r/5R0B/cv8A6d/u/wDzwXX/AGjydfWuT6t/wY/737yDXgftPXCfz65+7de697917rFN+kcX9X+24J97Xjx6q6hkNfLPVS/83LsfY1D8U9/7Tqty4yn3LPFI0GJlnvVuPspVJEN7nllFx/X2Duab+MWDRMacf8HWUn3XeWd/u/ca03K3gPgIKs2KcQf8AJ8uoX8oTsfY1Z8VNibOptyYufctPTU5nwy1C/fKftY4m1wXuLEe/cn7jDLtkMKHKqB/h6Ufeu5a3629zdw3uWI/TO7FWxwoop60/wBnq03ehvtDdv0H+/Xzll/POJmvc+2PcxKe3e/t/wBI69/7RpOsaNkYfvezPrNEf+Nr1TYo9KHj9B/x+o/w9/LXc/7kv10Ej+NftX/D1zRgrAsmoKykg8hgpvpI/obkG/8AX2mttQYSxmjxuo+wPWp/KnVhreaSLirAinXzwPmzvfdH8ub54fzK+qtsRZGiwfyi68zmJwU1Gq00Zouy8jSbroq8QjSDBHO+UpBoHH0F1uPf0Oe0MFl73+z3JPMt2weXZLqGViTSjWeuIjzrVRG3+brDXmaeblnmPc7O2qPq0ZMf0jj/AC+XR0/mr8PMn8Rv5Wn8sX5FYHETUfYfxy3ps3fXYjwwGir6STtzJxb7mo8jUel2kiyYpsepYWCCwNvcZe0nu1F7lfeP539vbqYS7ZeQyJAhGNUAt4TTzqU8ViM5GOj3mLlj+rnKFhu8IpMNDmmTmta+Xn0L38iOtqflN88vnV/MV3djHp6aixtYcVG8Gpsflt9SS5fIR4lSQvko6HGLEI1a4WoUf2vYK++sLbkf2i5W9mNumCSXlxq7eIjjL0bI4NI5HwnI8ulvtgw3DerrmW9QyFewDyyoPqP8PSk+Nvzl+dfzy+QHf2N/l2bV+IvxH2L1/kZpNx753xt/E0u983hp8xUR0uY3LUUtNNU1rTyI9RVLHSNHT6z5ZLm/t3mj2h9qfZ7k7Zdy93LncuY551jEcMLxokepVIUUe31KKgVLE/LHT1hzDzPzFvd3Dy9DFFHHr1awa6QDX+LJAr/lHRaP5G826v8Ah335SpvHd21t7bql2J3R/ezduxIVptmboz0eegGSy+3qeKKnRaV59bRKIF+twBz7kP71lvZN7C8uz2FlJBaG7svDikIMka60oCdbVPD8Rx+wB327kdeY7sW57fCav5g58+hH/wCE53/M+/5kp4/49DO3t/hvOruOPYB++9T+qPt6PMT/AMtFl/s9CL2tp9dvZHof8MvQk/8ACX2w7O/mIX/56nrD/wB6DdvsC/3jH/Kicif80bj/AKtWXRr7KZ3beqeqf8el6u8/nH3H8s75bf1HWq/0+n94aPm3vDT7m0ZX3/2ZhGy1lWpP5Z4njjqSPcx3Tk68RBUFMn061wf5SP8AKU+DfzH+D2L7n7/3/vPbe+6/sfsTbFbS4bs7C7UxFPhdtvRjF1UmJyh0rcSyM8rqQ1r8299LfvL/AHj/AHR9qPc6Hlvk7aItwhlijKu8YZvEYDtDakP+b7a9QjyNyXy9v3Lxl3O7MJBdgNRALKSKcDx6F/8Ak5d4b1+O38zPt7+W91l2bN3r8T8ZVdlvtPNRx4utG36naFN9/S52iy1HdGjR2koK7xyPFM48kScr7Bn3vOStm9yPu92PvNzPbttO9wJG7ROTRlkrWLRqkAqQHUgkkYJzUL/bPdG2jm6bY7Ua4CCNXE4oOPpQ9biR/N/6/wCP/E8/7fn+oB498Y5pvqLdp6U1EGnp3DrJvh+wdGY+J/8AzM+T/wANTK/+5VN76Hf3c3/T57kf8us3/HW6g33u/wCVdt/9OOrJ/fcnrFnr3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3XuvnA/8KZf+3ufxK/8Sh1j/wC9PiffuvdfR0of+AVH/wBQtP8A9ah7917rPJ+g/wCw/wB79+HWmXWNJ6q2/mp9kbHxfxX7I2pkdy4yl3FVUTCmxEtQqVsjmlkuI4m+o9S8/wCPsKc1X8UNnoPDrJj7snLfMFx7kWe72cJa2UEFsU/z/wAqdBn/ACcOxdkP8U9nbQi3NjH3LGyNJhjUoa0K9MisBF9b3B9pOT7+FtvEI462/nTo5+9lyxv8HuLLu0kJ+neOIh8UGCGH+qvVyADHRqBvrubcAWPHsbOdNNHnQdYnE6WoowepHv3W+ve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de64O5XSALljb/W/x9+691qjfzz/+FIXXvwRTNfF34cz4Puf5p5ZBg8nX44puXZHRVdWyCmigzkFFqXKblJcfa4WLUsLlTVkECBvde6rl/k4f8Jz+1Pkv2LTfzIv5yNTuXfu8d+ZlOwdqdCdj10+W3HvCrnkFVjt2d6JVljDSWCGg2wCAIQgqUijC05917rfExuKx+Hx9FisTRUeLxeNpKehxuNx1JT0GPx1DSxCnpaOgo6ZVjhiijUJHHGoVQLAAe/de6crD/iP9h7917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de6Jf/ADHP+3fvzg/8VL+Qf/vqct7917rVs/4RG/8AZG/zM/8AFmdtf++soffuvdbsfv3Xuk9mM1jcLTNVZjJ47EUrM8K1WTrKahgeZkZ1iSWqZFLlVJCg3IBNuD7pqhhp4p41/wAPT9rBNc3KQ28bSuSO1QSQPWgr/g61v/5BGcwlFuT58RV2ZxNJU5Tv/HjGQVWRo6eXINJkc4E+yjqHUzX8iBfGDcsA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3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3UWsrKSgpKuur6umoKGhpp6utraueGnpaOkpozNU1dVUTkJHHGis7u5CqoJJAHv3XutFP+c5/wpB3725vyf8Alzfyexm+xOz985ubrnd3fuwKCozWXymVqpGoK3ZPQsdGG8j8OK3cekxxxq32pADVC+690dL+Rj/wmx2X8M2wvy2+c1JiO5fmPmidx4TauXeLdOy+j8lkpDWzZCWorvIua3Wzs7VGVmLRU7krTgyXqG917rbi0jVqtz/X/ivv3XuuXv3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3XuiX/wAxz/t3784P/FS/kH/76nLe/de61bP+ERv/AGRv8zP/ABZnbX/vrKH37r3W7H7917qr/wDm89RV3bPwM7spsS9UNwbIpKDsnBNQyTxViTbRrBVV0UDU7KxMtG9RHwfox9kXM8LS7RNJFiREJVhxGOp5+7JvtpsPvTtb7hpe2vHELowqpBHaDwxrCk561S/5MvU9b3B8+Op4pZKuTA7A/i3aG4oVnqRR1X92qVmw8Fd4WAZjXTwPH5AbsnFre4W9vbe5uL1EkJIDln8ga8K/nXrp798fmSz2L2YurgRqk16Y7eAgZBrVyoP9AmvyPW/Mq/QqxX1XI/ANibe8hqaJNI+GlKdcRlUfCuNJ7vnjh/MdTvfur9e9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvdatv/Cq86fiH8aza5/2ZxW5Aax/0TbiHGr/X5H9L+wNz/wD8kRf+ai/4D1mF9ywf8xNuv+eKT/jy9aLjH/Y+r6k3P9bE/U+4mkrrf5qP8nXU911PGPn/AJD1wuB/r8/4D/Y+2Vqh0sNR6cEskI0xgU9WP+XhjrgZE/DA2vf6i1j9DqsL/i17/wC9e/FoDQXqMrD4KA0p51wfPpszZq08UnyDrVfl8R4/Z13qFzwxHGkrY3b8Lyf99/S3vxUUMkNSF8jxP2dWUo1NMeo1wQagHyOB5HPWeSGaNIZJIpY46jWaaR43RJ1ifxyPC5Gl9LAq2gmx4PPHt0QziAXDLoB/y9N2u4wtcypaSJK6YkQMDQ/Ohxn16xf1/wB9+fbbR+GRmtRXp9o5E7pPxdwHoD5dde69U69791vrl+R9T/rf196ApluHWpAzAKTRT5jj1xJF7ckc2sCb24bTYEmxIt9L/i/F3GLPhEoD504Drckj2RW0mlQQSDJLDXjIp3eZA/D+zrs8W/I4+nIvYXNx/QnkHn+oHurKVNG63FGbdS0zag3w+X2U66P1H9OeLen6fn3sDsPTLlzoJHFv5db0f/CVYFviB8kfpz8m2+lza3VO3xx/h+P9v7mTkZgu0FjwB65Y/fVUN7q29cUs4T+xm62ctxUWQyeBzOOxVcuMyddiMlR47KPC04x1dU0jwUta8KspZYnYSFAw1Wtf2LZozc25SI6a9Yj7fcQ2l7De3KeJHDIrlP4lUgleB4jHWiz29/K+rtq/zEOtPhTW9yLl8j3Zh5961vY/91pIP4VV5ylzObqof4I1WzTWagkQMagcS3sCo9wnuPKwbm2OyZ/jOonjk5/w9djuUfvNW0v3f5vcpttZYtsf6UQeKo8QDw0UrVcYYHgaUpXrdh+PvW+b6g6b626u3DudN55bYG0cRtSfdMdA2OGZjwtOKKkqzRvLMY28KRqymRrlb/n3M9jbta2q27GunHXIzm/e4OZeadw5itYDbJezNKIywamrJ4Aefy6Ggi/tX0G+qgu2R/xkzsD/AA3PlbEXvdqkk8/0tYf4e/mj+9K1fezmZR/yly/8e6zh9uh/yEtvJ/5Rz/1c6DsE8cWuP8Tf/WAB9wUyTCWsQqDxoKn8gMmvy6HDIpDSs2kR5OaV65ci4PBvYKQQCP8AVA/kf4/4gfU8UlZ51MDs0aeaMjIzf70BWv2dajuIPC8WLvPqD103ABIddQuuoctY2uv4I/ra/wCOPbf0luzRxF5IkYaokZGVXAqcEqAfy6pL4S/owSBpPMA9cgrer9JtpJsdQ5FyAVJvbnn6cH2qDmdiNTxoTSoRiqFcGrAaRU54jpwXlj4iQMQslDX1J66/P+v/AIED6fi/tKz65PCum1IODr/Injw60Y2WUktih6xyzQU8bzVM0UEKctLPLHDDGL21SSykKov+SR7W29vdXkyw6zMV+BY1Jd6egGonA9Om5Z4re2E8xCg+uOo38Sx32xrv4jj/ALINpNca2lFEOdP/AAK16L3P0v8A8bUty9zBJO9nJays7qCsQRvFGf4KaqUHHT0wLuwWMXUkymA4OeDY/nTrPFPDPGk1PPDUwSJqSop5EmgdSbKY5YSysD9bg2+lifaK4tZDdR2kkTQSwDSUdSp8SgoGBAI4eYHSgIt0oms3DJjTkUPp1nUE/wBlrDi4UkHi/Fvp+Pr7aSNppWingYsvnpZh/IEdWecRjROUQ/Mgf5euyCP1BhyOdJItbnkX+n9Db/D/ABcVGC1jCxgHzRgn7agV9c9N1RhoEql/kR+Xn1wH0/H/ABX+lr+2iih9TiN2r8SUx8+J6cFAulhUkdSqHmvoeL/5bScn8EVCsCLfnj2MPbwg88bUD/ynRf8AV1Oizdx/upuR/wAuz/8AHG6uyh/zUf8AwQf717+pPZ87TbH/AIVH/wAdHXP1/jb7T/h6y+zLqvXvfuvde9+691737r3Xvfuvde9+691737r3XvfuvdaMH/C4L/mQvwF/8S73T/7xuF9+691uCfCj/sjT4k/+KydC/wDvq8V7917ozfvR4de6qp/nVf8Abtb5E/8AUNsT/wB+NivYT5v/AOVcvPs/y9ZHfdO/6frsv+mk/wCrbdL7+WD/ANu1/i7/AOIVh/631nsui/6dw/8AzyTf8cfon+8N/wBP437/AJ60/wCrcPRVozaJP9b/AJF7+XTchW+k/wBOf+PHrKBfl/B/k6Cbvrq7Gd39JdudPZmPy47szrvduy510JI4bP4Sagp3jR/q6yMpTg2Nj+PYy9rOaLvkf3E2Xmu2eklpcoa/IyCvD+jXoq5jsE3Xl6XbqVZh189T4PUnY/yC7q+IX8sjdmNyMGB6X+X2/wDsbd1OJPLDS0+CSKo3RBPRvYL9lJi8hdm4YTkf4Hvv7tz8u8lcmcz++9s48bdNkhto28/hm8Ch/pNcAnJ+EUp1iDsEF9uG72vKGSkV2zsKeS6c/Z2/4OjR/wA4zJbq+CfzU+cmxNl4w02wP5gfS+zsm0ULKkNFFW56krtwPRxRgKH/AIriq2HQvKwzc/q9gT7s17t3vr7Xctc07xIHvuVb2V9RPdrAkEYNcgeFKKZ/CKHFOjjnu2n5V3q722Ff0b+BBSnE9ox+Y+fl1ah3h3dnf5SH8l74gbe2l1js/efZXYkGIjL9g7cp85tTaW6914ebe+cz+dwdWPHUVsKVC0dLHKQpCMzH0WOMXKvKW3feR+9/zNut7eyR7XtasFELqskgSsIQFg2Kkse2gqPzH24XdxyX7dQWkNsNVwVIL50lqGvlkf8AF9VU/wA1HO/KvPfCXprdnyO/mCdD9147sfO7O3Rs74y9Qbbw4/uxFVbcmros0MxjpEenixUEpoZ4GpEUSOIlJ4Jyt9g7PkbZ/c7d9m5S5Su9re1ieN9zudQW5VZEFADBECSRXtZuBPDqNuZptxn5eV77cI5GOg+Av4R5fjPyPDodf5zbM/8AKn/lFF2LscDiQXYszNbYcAADH+nuLfuuJAv3i/cYWpIWs2pPRvHWjcOByB/h6E/PcjLyhsMPwg6O37AM9Dh/Np/7ewfyiv8AqA6U/r/z8Wg9lHsSf+YEe6R/4duX/VqfpRzd/wArlsP+lj/wr1uGS8VDm31ma5+gH71uT74vMdM5b5D/AI91kw2IT9v+TrSv+HncHVPSX/Cg751bv7h7G2h1jtWXNd4YuPcG9cxT4PEyZGrz1G1PQLWVVk8zqrFUJubG1/fa33g5O3/nb7jnK2z8t2cl9cj91yCKMEsVSKYM1ACaLqFcefWMfL26WWz+7F/d37BY/DmWpxRm8On+A9O38/f5ydL/ADPpfj58MPiTumh733nkuzaTM5nMbESXMbeTK5Cl/gG2tu4rKxpaqqXkqHmqDBdIkHrIP0LfuPeyvOvs/a717p+5qttdu0DRJDLRCFQiR3IJqOA0ggFie2vTvuhzHa7+tts210nd24r3EZ4Y/wBXHrbO+O/XtR1N0F0n1hWxrFkev+qth7TykaVD1UaZXDbapqLJrFO9yyfcJKVP+PHHvlD7r7/FzR7mb9zBb5jvtyvZ0/0stzI4/kwPU/8ALttLZbBY2k/xxQRI1eNVjUH+fRwug+e4djH+mQrR/wCsWp9zX9y9q/eY5aU/78m/7R5ugv7pf8qLff6VP+ridWuj6D/g3v6KzxH+ry6wm/CPy6ye7dW697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de68f8Ab/63v3XuiMfzE/nr0z/Lj+K3Yfyd7myMYx21qP7DZ+0oZ4Y832Jv3JRtHtrZeAgkZS81RKPJO68QwJLM3Ce/de60jf5KnwR7o/ni/O/f3833+YTTV24uldpditWddbOysM52xv7eu2Z1n2lsLblHUqI/7o7Oj+3WdIlKVNTGIpCzNVE+6919FCGFYlijiWOOCNQkcSIEjSJVtFHEgACgDiw+g4HA9+691J9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XvfuvdVe/wA6v/t0p/MS/wDFTe4f/eXn9+691TL/AMIzf+3V/YX/AItt2V/7wu1/fuvdbbnv3XugW+RX/ZP/AHp/4hvs3/3jq32h3H/kmT/802/46ehj7ff8r3sn/Pfaf9pEfVSf/CeD/t3vH/4mrsX/ANw8Z7Cnt/8A8kNv+ar/AOBeslvvxf8AT5ov+ldbf9XJ+r1fY56w4697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuv/R3+Pfuvde9+691737r3XvfuvddH6G/wDT34mgr17rCzKRa9uW+l72BuSPbTEVWTy60GUgkcBx+XXzG/51uwtybF/mg/Lf+8VDJRLvLftJvzAu6OsVbt7cW3KJ8ZWwu3DB/GwJU2DCx9Vx7hfnGGZd3edloj/CfUACv+HrsX91a+s7/wBn9ut7WQO9uCkgGNLFmNDXiaeleqsbgcHg/kH8W9hRAXOleP20/wAPWRDuiNoNa/YT/gHXIso/pb6XuPqeb+/ROUBZh3de/RjcXEavrHqy/wCYdcdX9G+ot/vj7s8olHcoBr5dOOZLr9VnEb+YNWqPQaeu7gixIAA0j6fS1re6BtPAV60ZpZF8OUgD1GP8pPXG/wCA1gPwOB9ePdtVSXYZPXkQJKoMgKADNDjjg+vlkdd3FrXFuD/sR/T3YSA/GOtRO8bSAlSCe0jGPnU/5uvXH9R/Qi/H+Fh7aU9x1DrSa61kYH0pX+dT12CAb8fS1i3B/wB9/h726qVDr8XmP8HWnj+qXTcMF08KDH+Xrq455Av/AIj36f8AXjCk56tRWIRuA8+vXH0va/1sR+fe3SJEXwzqI+XVQEP6sy6mX4RUZ/b/AJ+vXX+oH+x93kdX0lRTGft68kgkGpk8M+lRn54J/wBQ68LH6EHmw5H1/p7bz1Y6aHPRyP5enWu7e2fm18XtrbIxlRl8vTd19bbvqIII2kEGE2RvKh3RuGsn0j0pDSUsrMzWANh9ePZ1sUE0+7weEK6WFfl1FvvJvO3bP7ebmdzlEPi2dzGtQ1S7wOqrQAkVYgVNBnJHX1bIyrF2Ug3I5H5HNufz/r+59BBY064fHrL7t1rr3v3XuuDmwB/owtzbn3o6vwivXu6nb1Tv/Oz6Zk7a+G+dmxtMGym0M5Q7meqVFM6YzFwTTVkKlgbKbjV7CXOVl9VtLFVyOspvujc3Ny57nRJLJ4cMi0NQaaqinDz8uoX8kfpiXqj4eYevyVOn8V3xmqzdcdWY9MsmKy8SVVLArAD0Lcstyfabkbb5bLaYnmXSWQHy+Z8j0t++JzivNHurdW0EviQ2hMbYIAlHxDNK0wKjB8ierddz00tZtrcFJCuqorMHlqSnW1y0tTQSQxLb/FiB7Vc+WU19yPvVjaqXlnsbuNF9XeCRVHpkkDOOsXNokWLdLaVzREliJPoA4JP7OqaKimno5pqWoQx1FLI9PURspVkmhcwtHotdbabEH38t3MGy3uzbvPZ7oPBmiYqyMRqBGMAE1z5io+fXQHbrmC/iW7tG1x9p1DGPsND/AC6w/wC+I/3n2StExokpcqMhQwoa/aP29OKwlYkfCSc0+fpx68T/AI3ufzfk/wBOPdiI5QKRiMp8JNDQ/wC1r/k6czEOxtY8x6/LNB11/sb/AJF/8fr7vFLOizAFBqXtOk1J/bj8+qzeFMAfDoR5deuP94HP15tb3qDRDBHGqaWYVkOPjqceVRpp6/b1rTCXV3TgKV/P7Ovfj8D83A5/1vfijsNNY1A8yrE/yPW1SNZKqKDr1+ORe9gf9geL+9yN4kSxXAaRV4LUVX8zg0+Xz6uwZ11axq+w9dk8WP8Aj/xS3vRUPMhl/UjFaq2aelPIfP8ALqsmp4DVu5aUpXPrx/2OumP9OD9RYfU/W3upSOWVmKKlPgJFaenDPp1aXVcGIO2BTV8uH+rz67JBH0H6bfT/AA/r7blWOW2kLQ6px8JJGT8q54/PrTRxhCoOv/N+fXXBFvwbXHtRKdaxRLHGOwhnKsc1+Gla/OtKY6oogWMIYODV4j59e/3v/W9sr4qfoUUxkZ0gj+RP+Trc0UTsPBGgV674tfkaSXv/AIfXUCf6e6tGsYFlGalqFfmK1rXgOBwaHHDPVlo8xhjOo8OBH+Gg6NR8ScTWTb9yOZjhY0GPwFZQ1FQFIjE9fUxPTIWP9orCxIH+v9PfS3+7k2Xc5fcy83yOFjaxQSI0mNIZkNB65qMjHUB++F3brtMG3s48ZXB0/LPnw/n1Yx77W9Yxde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XvfuvdePv3XuvnB/8ACmVWH83T4k3V11dn9YMLqRdTubEkEXt9fx7917r6OVD/AMAqP/qFp/8ArUPfuvdZ5OUYWvxyPrxfn3V1LLQf6s9ez5Z6qW/nJ9Mydw/DLd8OMpw+Y2vksZuZKpYrzx0GI8tXWRKzA2UgC/P0H19hfnC1ku9v8ONa/wCbrJv7qHOP9Wfdmz8aXw4JW0NxI1mgGBU1+dKZ49Bp/Ix6Ul6t+IyZzJ0ytkN97lrd00dW8YWZsVk6SI09On50Aq5Un+v19puSdsFjtFSKOZH/AGVHQh++Zzi3M3uzcWkEuuO3jiQgVoCAfXBpU8K9XZhTZf8AXBvx+DqAPsZ8D1iHWhwMdZPfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Qd9q9sdb9H7B3P2p25vTb3XnXey8TVZvdG7905KDFYXD46kTXJNU1dQQCTbTHEl3diFRWYge/de6+dr/ADKv50Hy5/njd9P/AC4/5XeGzO0/j5uTI1OF3BvCsyw2Zmu4MLTyiLK7l7C3BVOke39nw2aX7Mlp6hADMGZlph7r3Wz5/Jl/kxfD7+VBsCm3LNvTrztz5Zbpw8NP2D3jk8jhFTDRzxBq/Z/VlHVTM+MxaSHRJPxU1YUNMVB8a+691fCm/tiKtm3vtEnkE/3kw3Ivx/u7+n9ffuvdc/8ASBsP/ntto/8AoSYb/r97917r3+kDYf8Az220f/Qkw3/X737r3Xv9IGw/+e22j/6EmG/6/e/de69/pA2H/wA9ttH/ANCTDf8AX737r3Xv9IGw/wDntto/+hJhv+v3v3Xuvf6QNh/89ttH/wBCTDf9fvfuvde/0gbD/wCe22j/AOhJhv8Ar97917r3+kDYf/PbbR/9CTDf9fvfuvde/wBIGw/+e22j/wChJhv+v3v3Xuvf6QNh/wDPbbR/9CTDf9fvfuvde/0gbD/57baP/oSYb/r97917r3+kDYf/AD220f8A0JMN/wBfvfuvde/0gbD/AOe22j/6EmG/6/e/de69/pA2H/z220f/AEJMN/1+9+6917/SBsP/AJ7baP8A6EmG/wCv3v3Xuvf6QNh/89ttH/0JMN/1+9+6917/AEgbD/57baP/AKEmG/6/e/de6Jp/MU3xsuq+Afzbp6bd+1qiaf4ofICGGKHcWHeWaWTqvKqkUSLMSzMTZVAuTYAEke/de61lf+ER3Hw3+Zn+PyZ21/76uhPv3Xut2P37r3SU3dt7Hbw2zuPaeVhE2N3NhMtt/IIyiRXpMvQyUU40N9fS59tTxGS3lTBDKR+0U6WbVfSbXulvudo1JYHWRTXgUcN/MjrXd/kR/Fmu6j7D+aW68/Q/bZDZ3Ztf0LhHeNwRSbWykuTyvjeQXB9VGpK/UHn6AewByVtR2+9vRKBxWlK+Zev58Os6fvj+58POnK/KO17fIfDMLXUgNK1ZIlXVpJB/FTy62RdDi2nSPpq1Xv8AX/D3IwNT3Z6wJ/FqXzNT+z/ivy6ke69b697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de61bv+FV4v8Q/jV/4s2h/9hRuEf8SfYH9wP+SIv/NRf8B6zC+5aae5l3/zxSf8eXrRZP8AvFzb/b/19xM/9o3+lH/PvXVGQkSRgeZ/59PSw67pKTIdg7Cx9dBDVUVfvbaVDW0k6+SGqpKvcFPBU008f5R0ZlYfkX9uWwVrlDTjIB+RI6Jea2nj5XuND0lSCVqjBqqEg4+Y4cOtlX+Yn8m/iT8LvlRuH454r+WL8Ruwdmbf2f13l6nL5nC5zF7kyQ3VtamzNbCtbjqhY0KSyERyCMn+t/cjbvu9htF0tlPbRuhUGpRaioocnPz6wT9rfbnnj3F5Xn5wfma7spRPIgo+pDpkYAiMrSgFBxPRP/kf8b/ib8sPhhu759/B7r7K9FZ7pncWF238m/jRU51s9tzbWPzqmCg3xsOrqmadaR5/GWjLhChlOiN4jrJtz2/bdwtf3htS6CncQCaYqeFaUxT/AIvqVuS+dOffbz3Lg9tPcK4+tgvw30d2ESMtpAGhgqqNRPEgmtcDouPyYT5Tb3+N/wDLo2L2N1T1RtXr/cm2cht/4zbp2ZRYOg3j2ZQ5HPUuBkquwK+lkaWGZaqenQmqSMOzNM+ptT+y3co9wu9rgicqNQ7aKATxPkPyHQz5Bm5O2zm/mq9sLyaWSGQG5R5HYRErqIjVnK0xU0oAf2dKXA/yT/5im4c/u3a9P1Bt7GZzaWWmwj0O4OytkYGXdOTpcZBl6ul2AuTq0bNeKKpgEktEjxq5MZbWrAXtuVLmUMjPQiPAJ/FnhXJ4ig4fLpJP95r2y22C1ee4klW4UBSEqIzU1eRg3YKfxYFPLPSM6a/lFfPTvLG5XJbX6gptt/w7cmc2nS4rs/eO2es9xbi3DtqpagzuO2pgN1zwVOT+3nR4WmpY2iZgdDsByzZ8p7iYCLhwZK44CvoKUGfy6U7595L225dWATXD3RnyDGmpQv8ATZSAg4VY+XRBuwuvd7dT743R1v2NtnKbQ3zsvMVW390bZzEPgyOHytDJ46innQEqw5DI6sQylWU6WBJLeWsllJ4M2G6mnl/ftu5jsbPd9pYT214KqRwApXiPThxPSaoKGtyldQ4rF0lVkMpk66lx+NoKSFqiqrK6skFPSUlNBGCzySyMiIi3JJt+R7aS0lupIbeE0aQ4+yo6VXsy2UU094wiEJZix4CMVqacMCnln1621OgPhV8Rejvjr378YO2eqtl9sfNPbfw3398n+3d556nXK1HSGcyuIRNgdX4OTVpgrKGB1rKoABhK2o/W3uV7HaNvXbp7CRA0saVY5rXFKGtR5V65x83e6HO3NHPO38zbbcyWuzPuC2sMYACzKCA8jY7lbIWpIFCwNCOtRxD6dX5vpZiDqa3F2Y/U8D3FEy4YnyYjro/Gry2SrMa+Ho0+ox/M48+uf4/2/wCPdeCkdK3YvN3ZxX0z5Hrem/4Spi/xC+SII4/2ZcEf+io29f3MfI3/ACSSfn1ym++f3+5ts7VqbOOv+9N1tHGNSLWP0P0v/r+xkAF4dYh9a1fyaNv+FCPxCA/59viQLD6D+7W7ARx/rD3Ht5jn+3Ff9C/yN1nXyif/AACTfEoKfXny/pw8PT8utlUIAQQLcf74+5C4GnrnrBU9c/e+tdVBdtf8zN37/wCHXlL/AOI8h+vv5pfvPhT74cxAj4ruav5SHh+wdZy+3Kg8o7af+E0/LUT/AIegD7M2/mN2db7/ANsbdzOU27uHP7O3JisBncJWfYZjD5mrxEseKyONrACYpo6jxlHtx9fwbRhyHuFltfPW2bvu6LNZ2t1GZo2AKyRllBRgcEEca9H+7IbjbJak6ihOCRmhpw+fWut/wn8+ZPc/YeJ+ZvU/yo7W3N2DvLoPdg3E2Y31k5MrlcXtrFxVWE3XTRTzLqFJSVGOaYo1wGlJH199D/v6+1fL9vNynzhyNtsNpHuUQjRLeNY1aViskbFUGliUbTmtaDjTqIfanma9ufr7HeZi7W7GhKqpArTOkCvRLf5R380fvru3+ahvnZHa3au8tx9R9+z9q0PWWy81Xy1W2du5fGZVs5taj21RuoSCNKOKaE+G502BBPHubfvX/d35N2T7tlrPsO2w29/y8lufFjWkul9MUniPTVJRm1fqEjz49BP2+553e/51WO6mLJNXSCq0A+WPMetadGvzXyO+R/fn/Cg1vjt1/wB0b+2t8euhKCDJ9kbL27nmg2dkotibOGWzdVn6ZP2mhr8pVY+lrDI9lBINjce4027kbkzkD7jB5g5h2q1ud63nEEzxI0zSzM3hMjFaqUhSRu2mcmpNehDPvG67l7oSWtvMUtbXMgCrT/BXNR5jh0c3un/hQV/Lm6a7Gy/XE29d5dgZHb2Vnw24c315tCszO1cVkKKpNLVwwZiRkStEbroZqTWoYFdRPuDOUv7v/wB6eceXrfeJRa7bBdRh40mkKzMalgTGYTpDLSlWpQggefQp3D3e5Vs7xrZTLMEOg6VFAa0rUNwBrX/B0/fPT5S9T/Jv+T98o+9vjl2E25dqV3XRp6PO4l63B5nC5ii3VjFr8Tk6Q+KqoqyLWokhk0sFYH1K1/Zf7H+0vMnth96nZuUOfLNFdbhFGtRJHJFQ1Kq6aGDYCuAT5j16c5m5jtd+5Lur/bXoYeBHl+XVHNTu7dn/AEDE/wB4/wC9O4/7w/6a4IhnP45lf4yIT3DSR+AZPy+cRlfT4xJptxa3vNg8v8vj+8CisI7eF7c7S5MXhRiNWEMp/swNBatDrI1Z44HUVrfXr+0b3TyN4huPirnAQcfs/nnj1snfyk8hXZP+Wp8Mcjkq2syORq+l8NPV11dUTVlZUytkasmSeqqWZ3b/ABZiffNX72dtaWnv7zPbQRrFCt3J2RgJQAkdunTpx6U6nHkB5G5QsZixLGMMSSTVvI56pM/ni97/ACp21/MB+I3x66C+RfYXR2E7qwu0trV39081VUeMhzO699x7diz1bQ09mmaFZwzLrBIFh7z1+41ytyPc+yW+83cy7Na7nPt8kjI1xEkjmOO38QR6nVqZ4niTxPUWe519uv8AXC02rb7hrdJgNR4irHjkGlM/t4dAX88MV/Nq/lEYrrrvup/mJZPvbZ2X33T7YqNlbs81WMlkYaV696bKbT3JHPHVUEsUTxzS00weNihbSWQ+5B9ptx+7z96IbhyRcclQ7VPAjSNJHHHEoBOnUs0JSQMW4qV00889EfMn9bORBDuEG5/Ul3po0q2MU4p86Y627el9913aHT3VnZOTw8m3snv7r3aO78lgpUkRsVX7gwkORraQLMS6okkrCMOS2kLqPPvjhzxsFjyfzru/Ku1SGeOyuZYtelSNKSEKAxJPCmeJ8z1kftV3PfbNaX0+JJVBbFM0J4DA6Fag/wCBlDb6Gtoz/wCrA929vAv9eNpYf8psX/VxOtbv/wAkq4P/AC7N/wBW26uxg/zMf/BB/vXv6kdm/wCSRbf80k/46Oufr/G32n/D1l9mfVeve/de697917r3v3Xuve/de697917r3v3Xuve/de60YP8AhcF/zIX4C/8AiXe6f/eNwvv3XutwT4Uf9kafEn/xWToX/wB9XivfuvdGb96PDr3VVP8AOq/7drfIn/qG2J/78bFewnzf/wAq5efZ/l6yO+6d/wBP12X/AE0n/Vtul/8Ayw7n+Wz8XLW/5krEOPpxPVgfT2Xwivt1IScCzm/45J0S/eFx777+T/ylp/1bi6Kso0og5sEU8n+1bkg+/ly3BTJey0agDP8A4eso8DQV/hH+DrtGKOjg2dGDowsNLA3BueB/t/bEH6bpIvxoQwPoRwP+xw6roGrX50p0Qzqf+Wj8POjvkvvD5d9b9b1+E703xLuifO7iqN37jymHWp3lVJVbkqsPtevnajo5ah1I1Qx8K8irYOQZ15o+8t7v82e38Xtfv25rPtECxqsItrdG0RYjDTJGJW0/0nNcE1p0E9v5H5a2zeG3yytyty1SWMjkd3HtLFR+wU6lfLj+W/8AEP5x7n6+3f8AJDrzKbv3D1hS1VDtOvw+8Nx7VeGgr8jHlpKHLxYKeJa2ITRBkScHSC6qLO10/tZ94z3W9ndouti5G3JbK3vm1SK1vbzVYKV1KZo3KGhI7CK49B07vvJewczTxTbrCZJIsIRI60Na50sK8MVr0NfyE+L3Rfyn6kr+je9dh4/e3XNWtA0OKmlqsfWYXIYmn+2xmV2/mMe6VNDVwodKVEEgYKWB9JI9hXkL3b599sOcJedeUL5ra9nLvK+lJEcyE69UcgaMg1JppoK4p0r3flvbN721Nn3NDLCgAUamUqBgdykNj7eq58N/IN/lhYfYec6/HSGdyNFuHJ47I5LPZDsfd7byQ4mZpqKgx25UqfPSU2pv36an0rMQDJe1vc/3X37/ALyV1fLulrvEfapQUsbLSK01Ep4JBJK8SCfIenQX/wBabk36f6Wa2JANf7WSp9O7VWg8hXh0ZnvX+WP8Pvkf050r0L2xsXc+a60+PtNBQ9XYnH9hbrwVfhooMWMQi5DM4upSprT4VVddTIxuNV78+445R+8x7u8k8z7pzhy5ex21/vNTeSm0tZBJU68RyRMkY1ZogUdHO4ckcv7pY2+3X8RkhtKeEPEcFaCg7gwZvnqJrx6UPc38vH4rd/8AcfTPffZ+ztw5fsz4/Jt+LqzMUG+dy4Ohwse2MrFmsMuQw+OnSmrvHPFG0hnVjJyrArx7RcqfeT92eW+Xt55X2vcI4rLejM12htbVzKZgyyEO0RaOoY00MuniuR1a+5L5f3C+t9xuYS01qAIz4kg004VAah4DiDXo7rO0jF+A7MXsP03ZtQFj/wAT7gpG1qJX8xn8jj+fQqA7dJz5/n1UR3B/Iw/lwd8dpb87k7L6q3rl9/8AZe5cnu7d+SpO4OwMPS1uay8v3FbNS4zH1UcECFvUIo0CKOBYce8tOXPvs/eC5N5etOXdm3iKOzsI0hhj+gsXKRqKKNbQFmIA4sST5noA7h7Zcmbjdy393as0spqxE0wqfsDgflSnQ5fF3+Vt8FPh1uA7u6J6IwuF3okD0tPvTdOUyu+91YyGVry/wXKbplqXpXccNLT6Gtxf6+wv7g/er99PdTaxsnNm9s9qravDhggtQTpK1b6eOMvgnDEjpRs/t1yjsdyt5t9sRIpqC0kklDx4OxHHy4dWBn/bXJP1v/rXPHvHcju1MSW9T/h+316HJNSSehf6CBPcGyDe1shWn/XH8GqQfeUv3LyD95Xlpjx8WYf9m83Ue+6VP6i39f4U/wCridWt3F1sT9bEf43HPv6KtDllIPaPLrCf8I/LrN7d631737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+690kN9b62l1ns3dvYW/9w4zaex9j7fy26d2bnzVVFRYjA7fwlC+RyuTyFXN6UjghR3Yk/QWFzx7917r5uPbm9u+/+FV/813E9S9aVG69lfy9vjpkZas5YwzQ0e2ut4qxaLOdi5WmkHgbdW73iNNhqWUM9PTlRYrDUl/de6+jF0Z0l1l8dOoevujem9q0GyusesNs4zaOz9t42NYoKHE4qAQxvOyAGWonbVNU1D3eWV3kYlnPv3Xuhb9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691V7/Or/7dKfzEv/FTe4f/AHl5/fuvdUy/8Izf+3V/YX/i23ZX/vC7X9+691tuH37r3QHfIxpf9AHeWghg3T/ZYHHH/HnVhYhj/h+Ley68P+IXfifCqMBj+if2+XQt9vmUc/7HI7hU+utMeZPjpwPl1Ux/wnjbT/L4T/xNfYx5Nr/5NjQP969hbkCp2NwvETN/gTrJb77zFveC3ZsM23W9R/zduAP5U6vQWRi4W68m5P5ta1gP+J9jqlAK8esOfEQtorRh5evWcfT37q/Xfv3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuv/S3+Pfuvde9+691737r3XvfuvddNyCP8D/AL17914Ghr1ECkqy8t+BzzfTybj3vxFIqRT/ADdNBS5kAwG4fz6qq/mT/wApfob+Y/gMNV7uymS627c2pSvRbV7X2zQU1Xk6fGvKZ2wm4MXUlEyFFrZmjRpUeNiWjdbkeyPd9ntt3ChlyurP20/zdTV7Te93NPtMzWlgfHtZmVniJYZWoqpBoKg5qDXHDPVBs3/CT/sIzS/afODZ32wkbwio6Kz7TiG/7fkMO6lQtb66FA/p7CMvt2rNqWUL+3/Y6ys/4PCBohEn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uvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691je/p/xNhyRz9fqPp/t/fuvdaAf/Cin+Zz2v8/vkftb+Sh/LtGQ3xLnd7Yra/e+4dp1rmi3/vs1avF1ucpQ6lXb+3rGt3DVuxhaZNDArSNq917ra+/lJfyx+rP5VvxM2v0FsYUec35lUpN094dkR0wirOxOyKikEdfWLJIolXG0N3pMTTycxwDUQHkf37r3VoQ9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3VXv86v/t0p/MS/8VN7h/8AeXn9+691TL/wjN/7dX9hf+Lbdlf+8Ltf37r3W22foffuvdUqfzv+zu/em/izht+9IbxrdsYip3TUbC7UpIKHH1sGW2fvvCzYpBUffRu0RWZBCjxFWHmPJ49grny/vLHYpLi1+EHS5+3HDzH2dZZfc35f5N5r91YNn5otxKQouLYn8DwHXXPn8JA8yMdVOf8ACfDsjv7N9wZfpbEbxrKP47df7Y3P2LuTaMNFjmpKzdu5pafB4sVFdLE1UPI4epCJNbVAARpuCFvbu8umuDCprERqOcVIpnrJv7+XLvJllsFhzFc2+re7lhBHKCKeDGWejCnAFjQ18zjrcFiXUwNyAouB+bj0nUT7lwGsrD7OuWCsxYmoIOOGa+fUr3bq3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvdf/9Pf49+691737r3Xvfuvde9+6910RcEf1Fv9v791oiop1jESg3F78D9R/HvZNevU7AgwB+39vXIxqfqL/wBefr/r+9dbGP8AVnrj4YxqIFtQsQDYf7Ae9MNfEn9vWgCG1aiftJI/Z1y8a/0/3k+99W1N69e8a/0/3k+/V69qb16941/p/vJ9+r17U3r17xr/AE/3k+/V69qb16941/p/vJ9+r17U3r17xr/T/eT79Xr2pvXr3jX+n+8n36vXtTevXvGv9P8AeT79Xr2pvXr3jX+n+8n36vXtTevXvGv9P95Pv1evam9eveNf6f7yffuvamOCeuhEoN+b/wBSbn/b+6uNa6Tw69XFOuQULexPNuCeP9h7sMAAeXWuuXv3Xuve/de68Rf/AH1vfuPXuuOgXvz7oiCOoXz6913bi3/Ek/737v8Ab17roopvx+q1/wDYcj3ogEUOetgkdcTGpt9ePzc3/wBv79QVr1o0JqR1yCACw1f8lN79Tr3XQRRa1+P9qY/X/En3rT17rn79p+3r3XvftP29e6979p+3r3XvftP29e6979p+3r3XvftP29e66t/if949+0j5/tPXuvW/xP8AvHv2kfP9p69163+J/wB49+0j5/tPXuuBjBIN24N/1Gx/1x7r4amoYaq5zmn2V4fl1sHTWlM/LrlpFwfqR+f+Ke9+GlQxAJXgaCo/PrXXL3fr3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XvfuvddEA/W/+3P+9e/de68AALD6e/de67+vv3XuuBQHn/b/AOI+ljb37rxyKdeRAi6Re1yRf8f4D37rw4AenXKw5P8AW1/r+Pfuvdd+/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3XuuiLi3v3Xuu/fuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XVrf77/AHn37r3Xfv3XuurA/X37r3nXru3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917rVu/wCFV/8A2SF8a/8AxZtP/fU7h9gb3A/5IY/5qL/gPWYP3Lf+nmXX/PHJ/wAeXrRY/wBjb3E0nxv/AKUf4B11SlFZIx6t/wA+np427mpdubiwG4YIIqmfAZvEZyCnmZ0iqJ8TkI8jFBK8fqCOYwpK8gE292tblrOYOM9F+6bXBd20m3zz+FFdRtHqHDuUj1Hq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xB2TLVuqSl2/Ew1+XVVBSsSa/de6Rf8Awmi/kszfCDqRvmf8lsJNXfMf5FYNchTUe5Inqcz011xuBxlEw809WXlGezhZKzNzkrKimKlJ1LNq917ra7t9eP8Aff7H37r3Xfv3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de6q9/nVj/ALFKfzEv/FTe4v8A3lpz7917qmX/AIRm/wDbq/sP/wAW27K/94Xa/v3Xutts/T37r3RLP5g/TEXfXw1+QHWqwLU5Cv6/zOXwQKh2i3DtuA5zEywqf7YlgCryOT7Jd+so9x2e5s5MlkLfmO7/ACdSx7Hc2PyV7r7Lv+rRHHcRq/8AzTc6WH2ZHVUX/CdbpptsfHbtPuvI0LQZPs/fv93sbPOmicYHZNL4JUGqxMbVk8pH+Kkfj2Efbbb/AKba5LiXiZSB8wAB/hr1kt9/Dm6Lduddm5bsn1x2Nl4kn/NSaWRgf94C/kc9bFEYAe6k6SP9vcX/AN8PcitRWDebYP8Ak6wQUjQAPOp6k+79b697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r/9Tf49+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+69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Umxo2Tbm3qzPVlMZI445JajcGcqM7WSSCMkEiSoZQf8AUgD2mtLKCyi8CBQq1rQCnH5DHQm5v5s3DnXfJN+3Is0jqiVZix0xqFHcc0x0N4AH4H+wH+29q+gx137917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuv//V3+Pfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+690G3bHVWw+7dg7m6t7Q2vid57A3niqvDbl23mqZamiyNDVIFKlWF1kQ2eKVCGRwrKQQD7TXdrFeWz28oqGp+zo02Xe915d3WHetlmMNxAagjz+RIIx5HjXrWK7T/wCEqvSW5t4ZLL9U/KHfXVu0ayWaal2hmuusf2NNjfMxY0tNuGXOYmVoFB0okkDNYDU7n2DLvkLbLi+W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TfP/ANSe/de69/0FF/yYf+8nMl/6LTfP/wBSe/de69/0FF/yYf8AvJzJf+i03z/9Se/de69/0FF/yYf+8nMl/wCi03z/APUnv3Xuvf8AQUV/Jh/7ycyX/otN8f8A1J7917rVV/4VJ/zXPhH/ADJ+qfiHtL4g9oV/Zm4Os+xuzc7u+gO0tw4N8fjdxbZxuPxc0Ry0EflLy00wKxgkAXPBHv3XuvoP/CoMnw4+Jcbo6Onxl6HV0kUo6OvVuKV0dGsQQRYgjg+/de6M0fof9Y+9HIp14dV+/wAzjpeo78+Dff8AsfG485DcVNsyr3ftOmjj11E25don+P42lpOCQ9Q0BpwR/q7fn2Qcw7Ydy2eTb4hV6VWuBX7c06mX7vvOi8i+7O175csUtxL4cujLGJqBu2or5UBP59CX8Feno+hviT0L1caZaau2/wBe4KXNoQFlfO5am/iuWaew5kE0zI7fkr7f2G0+h2uK1YUZAA3+m+Xr0R+8HNB519yd35jLFknnbRqwQi0VRTNMDh5cOjbKDbkAG/454v8AS/s56jbA4dcvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xrf77/ePfuvde9+6910fp7917qOsLAWZtXq1fSwJ/pY39+YIcAU6qgKls/ExP2A+X5dZY00A83JNz/vVvfsDA62tQoU+XWT37rfXvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691/9bf49+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XVhx/h9OT7917r1re/de679+691EMaGUyaELAONVhqAItbUfoPrwPegEpjrxeQdlf0+JHlXrJGLNyeQLW/1j9b+/A07AMDrRUa/EB8qdZ/e+t9QK3HUWRp5KOvpaWuo50Mc1LWU8NVTSoW1BJYJ1ZGAIHDAi4va/v3Xute/c/8Awls/k47t3LuHdeZ6H3rJmNz5zKbhyr03bu96OmbJZmtevrWp6OnqFjijMrsVjRQBew9+690y/wDQKZ/Jg/58Jvv/ANHJv3/6p9+6917/AKBTP5MH/PhN9/8Ao5N+/wD1T7917r3/AECmfyYP+fCb7/8ARyb9/wDqn37r3Xv+gUz+TB/z4Tff/o5N+/8A1T7917r3/QKZ/Jg/58Jvv/0cm/f/AKp9+6917/oFM/kwf8+E33/6OTfv/wBU+/de69/0CmfyYP8Anwm+/wD0cm/f/qn37r3Xv+gUz+TB/wA+E33/AOjk37/9U+/de69/0CmfyYP+fCb7/wDRyb9/+qffuvde/wCgUz+TB/z4Tff/AKOXfv8A9U+/de69/wBApn8mD/nwm+//AEcm/P8A6p9+6917/oFM/kwf8+E33/6OXfv/ANU+/de69/0CmfyYP+fCb7/9HJv3/wCqffuvde/6BTP5MH/PhN9/+jk37/8AVPv3Xuvf9Apn8mD/AJ8Jvv8A9HJv3/6p9+6917/oFM/kwf8APhN9/wDo5N+//VPv3Xuvf9Apn8mD/nwm+/8A0cm/f/qn37r3Xv8AoFM/kwf8+E33/wCjk37/APVPv3Xuvf8AQKZ/Jg/58Jvv/wBHJv3/AOqffuvde/6BTP5L/wDz4Tff/o5d+f8A1T7917oYvj7/AMJw/wCVH8Yu5+ve/Opukd0Y7sfq/Px7m2lXZvsndW5cVS5aGCWlSSsweXllpqhNEzjxyoR9Da4B9+691ejDFHAixRqqRoqpHFGipHFGi6Y4o0QABVFgAPoPfuvdZT9P99+PfuvdQ5PC6PG6hgy2ZGBZHDA+kqb/AF97QyMakY4fs6oHZGbwDRo+79tT/k6kxqFQBQAo/So+igcWHvXV9RbuPE9ZPfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3X//19/j37r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3XvfuvdcdK8+kc/Xge/DHDrxyKHrsAD6ADi3H9Pfvn17hgdd+/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917rh40vfQt+OdIP6eB/wAa971HhXrWlQSwGWwfmPQ9cgAOBx711vrv37r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691//Q3+Pfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691/9Hf49+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3X/0t/j37r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvdf/Z', width: 500 }
					]
				},
				// PAGE 7
				{   // 6
					pageBreak: 'before',
					pageOrientation: 'landscape',
					stack: [ // content stack
						{ text: 'Appendix E', alignment: 'center', fontSize: 12, bold: true },
						{ text: 'External Walls', alignment: 'center', fontSize: 20, bold: true, margin: [0, 0, 0, 10] },
						{
							style: 'table',
							table: {
								widths: [150, 145, 140, 140, 140],
								body: [
									['Room Names', 'External Wall (A)', 'External Wall (B)', 'Internal Wall', 'Party Wall']
								]
							}
						},
					]
				},
				// PAGE 8
				{   // 7
					pageBreak: 'before',
					pageOrientation: 'landscape',
					stack: [ // content stack
						{ text: 'Appendix F', alignment: 'center', fontSize: 12, bold: true },
						{ text: 'Internal and Party walls, Windows and doors', alignment: 'center', fontSize: 20, bold: true, margin: [0, 0, 0, 10] },
						{
							style: 'table',
							table: {
								widths: [150, 145, 140, 140, 140],
								body: [
									['Room Names', 'Window Type (A)', 'Window Type (B)', 'Roof Glazing', 'Door']
								]
							}
						},
					]
				},
				// PAGE 9
				{   // 8
					pageBreak: 'before',
					pageOrientation: 'landscape',
					stack: [ // content stack
						{ text: 'Appendix G', alignment: 'center', fontSize: 12, bold: true },
						{ text: 'Floors, Ceilings and Roof', alignment: 'center', fontSize: 20, bold: true, margin: [0, 0, 0, 10] },
						{
							style: 'table',
							table: {
								widths: [240, 240, 240],
								body: [
									['Room Names', 'Floor', 'Roof or Ceiling']
								]
							}
						},
					]
				},
				// PAGE 10
				{   // 9
					pageBreak: 'before',
					pageOrientation: 'landscape',
					stack: [ // content stack
						{ text: 'Appendix H', alignment: 'center', fontSize: 12, bold: true },
						{ text: 'Review of Heat Loss Part 1', alignment: 'center', fontSize: 20, bold: true, margin: [0, 0, 0, 10] },
						{
							style: 'table',
							table: {
								widths: [50, 50, 60, 60, 50, 50, 50, 50, 50, 50, 50, 50],
								body: [
									['Room Names', 'W/m\u00B2', 'Floor (watts)', 'External wall Type A (watts)', 'External wall Type B (watts)', 'Window Type A (watts)', 'Window Type B (watts)', 'Internal Wall (watts)', 'Party Wall (watts)', 'External Door (watts)', 'Roof Glazing (watts)', 'Roof or Ceiling (watts)']
								]
							}
						}
					]
				},
				// PAGE 11
				{   // 10
					pageBreak: 'before',
					pageOrientation: 'landscape',
					stack: [ // content stack
						{ text: 'Review of Heat Loss Part 2', alignment: 'center', fontSize: 22, bold: true, margin: [0, 0, 0, 10] },
						{
							style: 'table',
							table: {
								body: [
									['Room Names', 'High Ceiling Increase (watts)', 'Amount of Air Heated per hour (m\u00B3/hour)', 'Ventilation (watts)', 'Exposed Location (watts)', 'Intermitted Heating (watts)', 'Thermal Bridges (watts)', 'Total Watts', 'Total kWh']
								]
							}
						}
					]
				},
				// PAGE 12
				{   // 11
					pageBreak: 'before',
					pageOrientation: 'landscape',
					stack: [ // content stack
						{ text: 'Appendix I', alignment: 'center', fontSize: 12, bold: true },
						{ text: 'Summary of U values (W/m\u00B2K) Part 1', alignment: 'center', fontSize: 20, bold: true, margin: [0, 0, 0, 10] },
						{
							style: 'table',
							table: {
								widths: [70, 80, 80, 80, 80, 70, 70, 70, 70],
								body: [
									['Room Names', 'Floor', 'External Wall Type A', 'External Wall Type B', 'Window Type A', 'Window Type B', 'Internal Wall', 'Party Wall', 'External Door']
								]
							}
						}
					]
				},
				// PAGE 13
				{   // 12
					pageBreak: 'before',
					pageOrientation: 'landscape',
					stack: [ // content stack
						{ text: 'Summary of U values (W/m\u00B2K) Part 2', alignment: 'center', fontSize: 22, bold: true, margin: [0, 0, 0, 10] },
						{
							style: 'table',
							table: {
								body: [
									['Room Names', 'Roof Glazing', 'Roof or Ceiling', 'Exposed Location', 'Intermitted Heating', 'Thermal Bridges', 'Room Temp Below (If none then average Ground temp)', 'Room Temp Above (through Ceiling or Roof)']
								]
							}
						},
					]
				},
				// PAGE 14
				{   // 13
					pageBreak: 'before',
					pageOrientation: 'portrait',
					stack: [ // content stack
						{ text: 'Appendix J', alignment: 'center', fontSize: 12, bold: true },
						{ text: 'DHW (Domestic Hot Water)', alignment: 'center', fontSize: 20, bold: true, margin: [0, 0, 0, 10] },
						{
							columns: [
								{
									width: '*',
									stack: [
										{ text: 'Number of bedrooms: ', bold: true }, // 0
										{ text: 'Number of occupants per bedroom: ', bold: true }, // 1
										{ text: 'Flow temperature for hot water (DHW): ', bold: true }, // 2
										{ text: 'Hot water per occupant: ', bold: true }, // 3
										{ text: 'η efficiency pipework loss to cylinder: ', bold: true }, // 4
										{ text: 'Electricity Cost: ', bold: true }, // 5
										{ text: 'SHC Water: ', bold: true }, // 6
										{ text: 'J to kWh: ', bold: true }, // 7
										{ text: 'water mains input temp: ', bold: true }, // 8
										{ text: 'kg to litres water: ', bold: true }, // 9
										{ text: 'Hot water energy demand per day: ', bold: true }, // 10
										// {text: 'AIR SOURCE HEAT PUMP RESULTS', bold: true, margin: [0, 10, 30, 10], fontSize: 10}, // 11
										// {text: 'Final secondary HW temperature', bold: true}, // 12
										// {text: 'SPF (at Hot Water flow temperature)', bold: true}, // 13
										// {text: 'Hot water energy heat pump compressor per day', bold: true}, // 14
										// {text: 'Immersion HW electrical energy/day', bold: true}, // 15
										// {text: 'Total Hot water energy demand per day', bold: true}, // 16
										// {text: 'Annual Demand', bold: true, margin: [0, 5, 0, 0]}, // 17
										// {text: 'Heat supplied by HP, excluding immersion heater', bold: true}, // 18
										{ text: 'OIL RESULTS', bold: true, margin: [0, 10, 30, 10], fontSize: 10 }, // 19
										{ text: 'Oil hot water demand per day', bold: true }, // 20
										{ text: 'Annual Demand', bold: true }, // 21
										{ text: 'LPG RESULTS', bold: true, margin: [0, 10, 30, 10], fontSize: 10 }, // 22
										{ text: 'LPG hot water demand per day', bold: true }, // 23
										{ text: 'Annual Demand', bold: true }, // 24
										// {text: 'LPG RESULTS', bold: true, margin: [0, 10, 30, 10], fontSize: 10}, // 25
										// {text: 'LPG hot water demand per day', bold: true}, // 26
										// {text: 'Annual Demand', bold: true}, // 27
										{ text: 'DIRECT ELECTRIC RESULTS', bold: true, margin: [0, 10, 30, 10], fontSize: 10 }, // 28
										{ text: 'Electric hot water demand per day', bold: true }, // 29
										{ text: 'Annual Demand', bold: true }, // 30
										{ text: 'MAIN GAS RESULTS', bold: true, margin: [0, 10, 30, 10], fontSize: 10 }, // 31
										{ text: 'Main gas hot water demand per day', bold: true }, // 32
										{ text: 'Annual Demand', bold: true } // 33
									],
									alignment: 'right',
									fontSize: 9,
									text: 'Left: '
								},
								{
									width: '*',
									stack: [
										{ text: ' 0' },
										{ text: ' 0' },
										{ text: ' 0 C (55 for heat pump others 70)' },
										{ text: ' 0 litres (if heat pump use 45, if other use 35)' },
										{ text: ' 0 %' },
										{ text: ' 0 pence per kWh' },
										{ text: ' 4187 J/kgK' },
										{ text: ' 3600000' },
										{ text: ' 10 C' },
										{ text: ' 1' },
										{ text: ' 0 kWh' },
										// {text: ' ', bold: true, margin: [0, 10, 30, 10], fontSize: 10},
										// {text: ' '},
										// {text: ' '},
										// {text: ' '},
										// {text: ' '},
										// {text: ' '},
										// {text: ' ', margin: [0, 5, 0, 0]},
										// {text: ' '},
										{ text: ' ', bold: true, margin: [0, 10, 30, 10], fontSize: 10 },
										{ text: ' 0 kWh' },
										{ text: ' 0 kWh' },
										{ text: ' ', bold: true, margin: [0, 10, 30, 10], fontSize: 10 },
										{ text: ' 0 kWh' },
										{ text: ' 0 kWh' },
										// {text: ' ', bold: true, margin: [0, 10, 30, 10], fontSize: 10},
										// {text: ' 0 kWh'},
										// {text: ' 0 kWh'},
										{ text: ' ', bold: true, margin: [0, 10, 30, 10], fontSize: 10 },
										{ text: ' 0 kWh' },
										{ text: ' 0 kWh' },
										{ text: ' ', bold: true, margin: [0, 10, 30, 10], fontSize: 10 },
										{ text: ' 0 kWh' },
										{ text: ' 0 kWh' }
									],
									margin: [5, 0, 0, 0],
									alignment: 'left',
									fontSize: 9,
									text: 'Right'
								}
							],
							margin: [40, 0]
						}
					]
				},
				// PAGE 15
				{   // 14
					pageBreak: 'before',
					pageOrientation: 'landscape',
					stack: [ // content stack
						{ text: 'Appendix K', alignment: 'center', fontSize: 12, bold: true },
						{ text: 'Emitters and Performance', alignment: 'center', fontSize: 20, bold: true, margin: [0, 0, 0, 10] },
						{
							style: 'table',
							table: {
								widths: [50, 50, 40, 40, 50, 40, 40, 40, 50, 50, 50, 50, 50, 50, 50],
								body: [
									[{ text: 'Room Names', rowSpan: 2, margin: [0, 8, 0, 0] }, { text: 'Type of Emitter', rowSpan: 2, margin: [0, 8, 0, 0] }, { text: 'Current Emitter watts (70\u00B0C)', rowSpan: 2, margin: [0, 8, 0, 0] }, { text: 'Current Rad Oversize %', rowSpan: 2, margin: [0, 8, 0, 0] }, { text: 'Flow Temperature \u00B0C', rowSpan: 2, margin: [0, 8, 0, 0] }, { text: 'W/m\u00B2', rowSpan: 2, margin: [0, 8, 0, 0] }, { text: 'Room Heat Loss watts', rowSpan: 2, margin: [0, 8, 0, 0] }, { text: 'Oversize Factor based on heat pump flow temp', rowSpan: 2, margin: [0, 8, 0, 0] }, { text: 'MCS Heat emitter guide watts1', rowSpan: 2, margin: [0, 8, 0, 0] }, { text: 'Underfloor Heating Details', colSpan: 3, alignment: 'center' }, {}, {}, { text: 'Likely SPF', colSpan: 1, alignment: 'center' }, { text: 'Star Rating', rowSpan: 2, margin: [0, 8, 0, 0] }],
									['', '', '', '', '', '', '', '', '', 'Floor Type', 'Floor Surface', 'Max Pipe Spacing', 'ASHP']
								]
							}
						}
					]
				},
				// PAGE 16
				{   // 15
					pageBreak: 'before',
					pageOrientation: 'landscape',
					stack: [ // content stack
						{ text: 'Appendix L', alignment: 'center', fontSize: 12, bold: true },
						{ text: 'Current Pipe Calculation', alignment: 'center', fontSize: 20, bold: true, margin: [0, 0, 0, 10] },
						// {
						// 	style: 'table',
						// 	table: {
						// 		widths: [100, 80, 80, 70, 70, 60, 60, 60, 80],
						// 		body: [
						// 			[
						// 				{ text: 'Room Names', margin: [0, 8, 0, 0] },
						// 				{ text: 'Room Heat Loss kWatts', margin: [0, 8, 0, 0] },
						// 				{ text: 'Specific Heat Capacity (4.19)', margin: [0, 8, 0, 0] },
						// 				{ text: 'Flow Temperature \u00B0C', margin: [0, 8, 0, 0] },
						// 				{ text: 'Return Temperature \u00B0C', margin: [0, 8, 0, 0] },
						// 				{ text: 'Delta T', margin: [0, 8, 0, 0] },
						// 				{ text: 'Litres Per Second', margin: [0, 8, 0, 0] },
						// 				{ text: 'Litres Per Minute', margin: [0, 8, 0, 0] },
						// 				{ text: 'Litres Per Hour', margin: [0, 8, 0, 0] }
						// 			],
						// 		]
						// 	}
						// },
						{
							style: 'table',
							table: {
								widths: ['*','*','*','*','*','*','*','*','*','*','*','*','*'],
								body: []
							},
							margin: [0, 0, 0, 10]
						},
						{
							style: 'table',
							table: {
								widths: ['*','*'],
								body: []
							},
							margin: [0, 0, 0, 10]
						},
						{
							style: 'table',
							table: {
								widths: ['*','*','*','*','*','*','*','*','*','*','*','*'],
								body: []
							},
							margin: [0, 0, 0, 10]
						},
						{
							style: 'table',
							table: {
								widths: ['*','*','*','*','*','*','*','*','*','*','*','*'],
								body: [
									[{text:"",rowSpan:2},{ text: 'Start ID',rowSpan: 2, alignment: 'center' }, { text: 'Supplying ID', colSpan: 2,  alignment: 'center' },{}, { text: 'MassFlowRate Subtotals',rowSpan: 2, alignment: 'center' }, { text: 'Pipe Selected', alignment: 'center' }, {text: 'Mean Velocity', alignment: 'center' }, { text: 'Velocity Check', rowSpan: 2, alignment: 'center' },{text: 'Pressure Loss', alignment: 'center' },{text: 'Pressure Loss', alignment: 'center' },{text: 'Pipe run Flow Length', alignment: 'center' },{text: 'Total Pressure Loss', alignment: 'center' }],
									['','',{ text: 'ID1', alignment: 'center' }, { text: 'ID2', alignment: 'center' },'', { text: '(Diameter)mm', alignment: 'center' }, { text: 'm/s', alignment: 'center' },'', { text: 'Pa/m', alignment: 'center' }, { text: 'm(hd)/m', alignment: 'center' }, { text: 'm', alignment: 'center' }, { text: 'metres head', alignment: 'center' }]
								]
							},
							margin: [0, 0, 0, 10]
						},
						{
							style: 'table',
							table: {
								widths: ['auto','auto','*','*','*','*','*','*','*','auto'],
								body: [
									[{text:"Predecessor ID"},{ text: 'Pipe Run and OrderID',alignment: 'center' }, { text: 'Room or Emitter', alignment: 'center' }, { text: 'MassFlowRate ',alignment: 'center' }, {text: 'MassFlowRate SubTotals', alignment: 'center' }, { text: 'Pipe Selected', alignment: 'center' },{text: 'Pressure Loss Pa/m', alignment: 'center' },{text: 'Pressure Loss m(hd)/m', alignment: 'center' },{text: 'Pipe run Flow Length m', alignment: 'center' },{text: 'Total Pressure Loss metres head', alignment: 'center' }]

								]
							},
							margin: [0, 0, 0, 10]
						},
						// {
						// 	style: 'table',
						// 	table: {
						// 		widths: ['*','*','*','*','*','*'],
						// 		body: []
						// 	}
						// },
						// {
						// 	style: 'table',
						// 	table: {
						// 		widths: ['*','*','*'],
						// 		body: []
						// 	}
						// },
						// {
						// 	style: 'table',
						// 	table: {
						// 		widths: ['*','*','*','*'],
						// 		body: []
						// 	}
						// },
						{
							text: [
								'\n',
								{ text: 'Specific heat capacity of water is calculated at 4.19 kJ/kg (kilo-Joules/kilogram) and is the default value. This value can be changed to suit your liquid concentration, i.e. the addition of glycol within system water that can effect the calculation. Please check with your heat source manufacturer for the recommended concentration and SHC number.', margin: [0, 20, 0, 0], fontSize: 10 },
								'\n\n',
								{ text: 'Our calculation is based on flow and return temperature (Delta T). The flow temperature can also be adjusted in, ‘emitters and performance’. Delta T should always be checked with your manufacturer for optimum performance.', margin: [0, 25, 0, 0], fontSize: 10 },
								'\n\n',
								{ text: 'We promote the design and use of low temperature systems and this tool is designed to help users achieve higher efficiency goals. This calculation is for guidance only on individual circuit types and full system flow rates to assist in balancing and pump sizing. Resistance to flow is not calculated or included here but will be included in future upgrades of our software.', margin: [0, 20, 0, 0], fontSize: 10 },
								'\n\n',
								{
									text: 'At Heat Engineer, we promote the very best engineer training in all aspects of heating design and work closely with hydronics trainers. If you would like to understand more about system design, heat loss calculations and specification, please email us but also get yourself on to the excellent training course with our colleague Kim Betty at ', margin: [0, 20, 0, 0], fontSize: 10
								},
								{ text: 'heatingacademynorthampton', link: 'https://heatingacademynorthampton.co.uk', fontSize: 10, color: 'blue' },
								{ text: ' #BeaPro', fontSize: 10 }
							]
						}
					]
				},
				// PAGE 17
				{   // 16
					pageBreak: 'before',
					pageOrientation: 'landscape',
					stack: [ // content stack
						{ text: 'Appendix L', alignment: 'center', fontSize: 12, bold: true },
						{ text: 'Current Radiators', alignment: 'center', fontSize: 20, bold: true, margin: [0, 0, 0, 10] },
						{
							style: 'table',
							table: {
								widths: [50, 50, 100, 40, 50, 40, 40, 40, 50, 50, 50, 50],
								body: [
									[{ text: 'Room Temperature \u00B0C', rowSpan: 2, margin: [0, 8, 0, 0] }, { text: 'Room Names', rowSpan: 2, margin: [0, 8, 0, 0] }, { text: 'Radiator Type', rowSpan: 2, margin: [0, 8, 0, 0] }, { text: 'Height (mm)', rowSpan: 2, margin: [0, 8, 0, 0] }, { text: 'Length (mm)', rowSpan: 2, margin: [0, 8, 0, 0] }, { text: 'Output at 50K MW-Air delta T', colSpan: 1, alignment: 'center' }, { text: 'Mean (Flow/Return) Water Temperature and Outputs', colSpan: 6, alignment: 'center' }, {}, {}, {}, {}, {}],
									['', '', '', '', '', '70\u00B0C Watts', '35\u00B0C Output Watts', '40\u00B0C Output Watts', '45\u00B0C Output Watts', '50\u00B0C Output Watts', '55\u00B0C Output Watts', '60\u00B0C Output Watts'],
									//['Bedroom', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0']
								]
							}
						}
					]
				},
				// PAGE 18
				{   // 17
					pageBreak: 'before',
					pageOrientation: 'portrait',
					stack: [ // content stack
						{ text: 'Appendix M', alignment: 'center', fontSize: 12, bold: true },
						{ text: 'Bivalent Design', alignment: 'center', fontSize: 20, bold: true, margin: [0, 0, 0, 10] },
						{
							columns: [
								{
									width: '*',
									stack: [
										{ text: 'Is a Bivalent System required?: ', bold: true },
										{ text: 'Fuel Type: ', bold: true },
										{ text: 'Bivalent point for fossil fuel boiler to operate: ', bold: true },
										{ text: 'Heat pump output requirement to bivalent point: ', bold: true },
										{ text: 'Heating provided by heat pump: ', bold: true },
										{ text: 'Degree Day Location: ', bold: true },
										{ text: 'Degree Day used: ', bold: true },
										{ text: 'Bivalent energy demand: ', bold: true },
										{ text: 'At design temp: ', bold: true },
										{ text: 'Average room temp: ', bold: true },
										{ text: 'Delta T: ', bold: true },
										{ text: 'Total heat Loss: ', bold: true },
										{ text: 'Total Area: ', bold: true },
										{ text: ' ', bold: true },
										{ text: 'Heat transfer coefficient', bold: true }
									],
									alignment: 'right',
									fontSize: 9,
									text: 'Left: '
								},
								{
									width: '*',
									stack: [
										{ text: ' No' },
										{ text: ' Direct Electric' },
										{ text: ' 5 C' },
										{ text: ' 8.67 kW' },
										{ text: ' 91% of Heating Season' },
										{ text: ' Thames Valley (Heathrow)' },
										{ text: ' 2033 @ 15.5 C' },
										{ text: ' 2433.15 kWh' },
										{ text: ' -4 C' },
										{ text: ' 21.2 C' },
										{ text: ' 25.2' },
										{ text: ' 13479.71 watts' },
										{ text: ' 281.44 m\u00B2' },
										{ text: ' 47.9 W/m\u00B2' },
										{ text: ' 1.9 W/(m\u00B2*K)' }
									],
									margin: [5, 0, 0, 0],
									alignment: 'left',
									fontSize: 9,
									text: 'Right'
								}
							],
							margin: [40, 0]
						},
						'\n\n\n',
						{
							style: 'table',
							table: {
								widths: [75, 75, 75, 75, 75, 75],
								body: [
									[{ text: 'External Temperature', alignment: 'center' }, { text: 'Delta T', alignment: 'center' }, { text: 'W/m\u00B2', rowSpan: 2, alignment: 'center' }, { text: 'Heating Demand', colSpan: 2, alignment: 'center' }, {}, { text: 'Renewable Energy proportion', rowSpan: 2, alignment: 'center' }],
									[{ text: ' \u00B0C', alignment: 'center' }, { text: 'K', alignment: 'center' }, '', { text: 'watts', alignment: 'center' }, { text: 'kW', alignment: 'center' }, '']
								]
							}
						}
					]
				},
				// PAGE 19
				{   // 18
					pageBreak: 'before',
					pageOrientation: 'landscape',
					stack: [ // content stack
						{ text: 'Appendix N', alignment: 'center', fontSize: 12, bold: true },
						{ text: 'Fuel Comparison', alignment: 'center', fontSize: 20, bold: true, margin: [0, 0, 0, 10] },
						{
							style: 'table',
							table: {
								widths: [50, 30, 30, 40, 40, 40, 30, 30, 30, 40, 40, 40, 40, 40, 40, 50],
								body: [
									[{ text: 'Heating Type', rowSpan: 2, margin: [0, 8, 0, 0], alignment: 'center' }, { text: 'Effeciency %', rowSpan: 2, margin: [0, 8, 0, 0], alignment: 'center' }, { text: 'Annual Energy Demand kWh', colSpan: 3, alignment: 'center' }, {}, {}, { text: 'Number of kWh in unit', rowSpan: 2, margin: [0, 8, 0, 0] }, { text: ' ', rowSpan: 2, colSpan: 2, margin: [0, 8, 0, 0] }, {}, { text: 'Price per Tonne', rowSpan: 2, margin: [0, 8, 0, 0] }, { text: 'Price per unit',colSpan: 2, rowSpan: 2, margin: [0, 8, 0, 0], alignment: 'center' },{}, { text: 'Pence per kWh', rowSpan: 2, margin: [0, 8, 0, 0], alignment: 'center' }, { text: '£ / kWh', rowSpan: 2, margin: [0, 8, 0, 0], alignment: 'center' }, { text: 'Total annual running cost', rowSpan: 2, margin: [0, 8, 0, 0], alignment: 'center' }, { text: 'C02 emissions', colSpan: 2, alignment: 'center' }, {}],
									['', '', { text: 'Hot water', alignment: 'center' }, { text: 'Heating', alignment: 'center' }, { text: 'Total', alignment: 'center' }, '', '', '', '', '', '', '', '', '', { text: 'factor (kg/kWh)', alignment: 'center' }, { text: 'Total kg', alignment: 'center' }]
								]
							}
						},
						//{text: 'Annual Running Costs', alignment: 'center', fontSize: 22, bold: true, margin: [0, 100, 0, 10]}, {}, {text: 'CO2 Emissions', alignment: 'center', fontSize: 22, bold: true, margin: [0, 150, 0, 10]}, {}
					]
				},
				// PAGE 20
				{   // 19
					pageBreak: 'before',
					pageOrientation: 'portrait',
					stack: [ // content stack
						{ text: 'Appendix O', alignment: 'center', fontSize: 12, bold: true },
						{ text: 'Ground Loop Design', alignment: 'center', fontSize: 20, bold: true, margin: [0, 0, 0, 10] },
						{
							columns: [
								{
									width: '*',
									stack: [
										{ text: 'Ground Type: ', bold: true },
										{ text: 'Thermal Conductivity Selected: ', bold: true },
										{ text: 'FLEQ: ', bold: true },
										{ text: 'Location selected: ', bold: true },
										{ text: 'Ground Temperature: ', bold: true },
										{ text: 'Ground Loop Type Selected: ', bold: true },
										{ text: 'Calculated W/m: ', bold: true },
										{ text: 'BOREHOLE', bold: true, margin: [0, 10, 30, 10], fontSize: 10 },

										{ text: 'Estimate of total heating energy consumption over a year for space heating and DHW: ', bold: true },
										{ text: 'HP heatingcapacity at 0° C ground return temperature and design emitter temperature, H: ', bold: true },
										{ text: 'FLEQ run hours [1]/[2]:', bold: true },
										{ text: 'Estimated average ground temperature: ', bold: true },
										{ text: 'Estimated ground thermal conductivity: ', bold: true },
										{ text: 'Maximum power to be extracted per unit length of borehole, horizontal or slinky ground heat exchanger (from the charts and look up tables),g: ', bold: true },
										{ text: 'Assumed Heat Pump SPF (from heat emitter guide): ', bold: true },
										{ text: 'Maximum power extracted from the ground(i.e. the heat pump evaporator capacity): ', bold: true },
										{ text: 'Length of ground heat exchanger calculated using the look-up tables = [8]/[6]: ', bold: true },
										{ text: 'Borehole spacing, d: ', bold: true },
										{ text: 'Total length of ground heat exchanger active elements, LP = [9] x Rpt: ', bold: true },
										{ text: 'Total Length of ground heat exchanger active elements, LP²: ', bold: true },
										{ text: 'Depth: ', bold: true },
										{ text: 'Number of boreholes = [9] / borehole depth: ', bold: true }
									],
									alignment: 'right',
									fontSize: 9,
									text: 'Left: '
								},
								{
									width: '*',
									stack: [
										{ text: ' 0' }, // 0
										{ text: ' 0' }, // 1
										{ text: ' 0' }, // 2
										{ text: ' 0' }, // 3
										{ text: ' 0' }, // 4
										{ text: ' 0' }, // 5
										{ text: ' 0' }, // 6
										{ text: ' ' }, // 7
										{ text: ' ' }, // 8
										{ text: ' ' }, // 9
										{ text: ' ' }, // 10
										{ text: ' 0 kWh' }, // 11
										{ text: ' ' }, // 12
										{ text: ' 0 kW' }, // 13
										{ text: ' 0 hrs' }, // 14
										{ text: ' 0 \u00B0C' }, // 15
										{ text: ' 0 W/mK' }, // 16
										{ text: ' ' }, // 17
										{ text: ' ' }, // 18
										{ text: ' 0 W/m' }, // 19
										{ text: ' 0' }, // 20
										{ text: ' ' }, // 21
										{ text: ' 0 W' }, // 22
										{ text: ' ' }, // 23
										{ text: ' 0 m' }, // 24
										{ text: ' 0 m' }, // 25
										{ text: ' ' }, // 26
										{ text: ' 0 m' }, // 27
										{ text: ' ' }, // 28
										{ text: ' 0 m' }, // 29
										{ text: ' 0 m' }, // 30
										{ text: ' 0 m' } // 31
									],
									margin: [5, 0, 0, 0],
									alignment: 'left',
									fontSize: 9,
									text: 'Right'
								}
							],
							margin: [40, 0]
						}
					]
				},
				// PAGE 21
				{   // 20
					pageBreak: 'before',
					pageOrientation: 'portrait',
					stack: [ // content stack
						{ text: 'Appendix P', alignment: 'center', fontSize: 12, bold: true },
						{ text: 'Heat Pump Summary', alignment: 'center', fontSize: 20, bold: true, margin: [0, 0, 0, 10] },
						{
							columns: [
								{
									width: 20,
									stack: [
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: '101', bold: true },
										{ text: '102', bold: true },
										{ text: '103', bold: true },
										{ text: ' ', bold: true },
										{ text: '104', bold: true },
										{ text: '105', bold: true },
										{ text: ' ', bold: true },
										{ text: '106', bold: true },
										{ text: '107', bold: true },
										{ text: '108', bold: true },
										{ text: ' ', bold: true },
										{ text: '109', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: '110', bold: true },
										{ text: '111', bold: true },
										{ text: '112', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: '201', bold: true },
										{ text: '202', bold: true },
										{ text: '203', bold: true },
										{ text: ' ', bold: true },
										{ text: '204', bold: true },
										{ text: '205', bold: true },
										{ text: ' ', bold: true },
										{ text: '206', bold: true },
										{ text: '207', bold: true },
										{ text: '208', bold: true },
										{ text: ' ', bold: true },
										{ text: '209', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: '210', bold: true },
										{ text: '211', bold: true },
										{ text: '212', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: '301', bold: true },
										{ text: '302', bold: true },
										{ text: ' ', bold: true },
										{ text: '303', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: '304', bold: true },
										{ text: '305', bold: true },
										{ text: '306', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: '401', bold: true },
										{ text: '402', bold: true },
										{ text: ' ', bold: true },
										{ text: '403', bold: true },
										{ text: '404', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										// { text: '501', bold: true },
										// { text: '502', bold: true },
										// { text: '503', bold: true },
										// { text: '504', bold: true },
										// { text: '505', bold: true },
										// { text: '506', bold: true },
										// { text: '507', bold: true }
									],
									alignment: 'left',
									fontSize: 9,
									text: 'Left: '
								},
								{
									width: '*',
									stack: [
										{ text: 'SPACE HEATING', bold: true, margin: [0, 10, 30, 10], fontSize: 10 },
										{ text: 'Demand: ', bold: true },
										{ text: 'Heat supplied by HP, excluding auxiliary heaters: ', bold: true },
										{ text: 'SPF(2): ', bold: true },
										{ text: 'Electricity consumed by HP, excluding auxiliary heaters: ', bold: true },
										{ text: 'Renewable heat supplied by HP: ', bold: true },
										{ text: 'Remaining heat to be supplied by auxiliary heaters and other heat sources: ', bold: true },
										{ text: 'Remaining heat, supplied by other heat sources: ', bold: true },
										{ text: 'Remaining heat, supplied by auxiliary heaters: ', bold: true },
										{ text: 'Electricity consumed by HP, including auxiliary heaters: ', bold: true },
										{ text: 'WHERE OTHER HEAT SOURCES ARE USED', bold: true, margin: [0, 10, 30, 10], fontSize: 10 },
										{ text: 'Fuel used: ', bold: true },
										{ text: 'Efficiency of other heat sources: ', bold: true },
										{ text: 'Consumed by other heat sources: ', bold: true },
										{ text: 'WATER HEATING', bold: true, margin: [0, 10, 30, 10], fontSize: 10 },
										{ text: 'No. of bedrooms: ', bold: true },
										{ text: 'No of occupants / bedroom: ', bold: true },
										{ text: 'HP flow temperature in DHW mode: ', bold: true },
										{ text: 'Hot water / occupant: ', bold: true },
										{ text: 'Final HP secondary HW temperature: ', bold: true },
										{ text: 'Demand:', bold: true },
										{ text: 'Heat supplied by HP, excluding immersion heater: ', bold: true },
										{ text: 'SPF(2): ', bold: true },
										{ text: 'Electricity consumed by HP, excluding immersion heater: ', bold: true },
										{ text: 'Renewable heat supplied by HP: ', bold: true },
										{ text: 'Remaining heat to be supplied by immersion heater and other heat sources:', bold: true },
										{ text: 'Remaining heat, supplied by other heat sources:', bold: true },
										{ text: 'Remaining heat, supplied by immersion heater:', bold: true },
										{ text: 'Electricity consumed by HP, including immersion heater:', bold: true },
										{ text: 'WHERE OTHER HEAT SOURCES ARE USED', bold: true, margin: [0, 10, 30, 10], fontSize: 10 },
										{ text: 'Fuel used:', bold: true },
										{ text: 'Efficiency of other heat sources:', bold: true },
										{ text: 'Consumed by other heat sources:', bold: true },
										{ text: 'PROPORTIONS, ENERGY CONSUMPTION, AND PERFORMANCE', bold: true, margin: [0, 10, 30, 10], fontSize: 10 },
										{ text: 'Proportion of space heating and water heating demand provided by heat pump (excluding auxiliary/immersion heaters): ', bold: true },
										{ text: 'Renewable heat: ', bold: true },
										{ text: 'Electricity consumed by HP (excluding auxiliary/immersion heaters): ', bold: true },
										{ text: 'Electricity consumed by auxiliary/immersion heaters (supplied as part of HP): ', bold: true },
										{ text: 'Fuel consumed by other heat sources: ', bold: true },
										{ text: 'HP combined performance SPF(4): ', bold: true },
										{ text: 'RUNNING COST', bold: true, margin: [0, 10, 30, 10], fontSize: 10 },
										{ text: 'Cost per unit of electricity for HP: ', bold: true },
										{ text: 'Cost per unit of fuel for other heat sources: ', bold: true },
										{ text: 'Cost of electricity for HP (including auxiliary/immersion heaters): ', bold: true },
										{ text: 'Cost of fuel for other heat sources: ', bold: true },
										// { text: 'RHI CALCULATIONS', bold: true, margin: [0, 10, 30, 10], fontSize: 10 },
										// { text: 'Annual space heating demand: ', bold: true },
										// { text: 'Annual water heating demand: ', bold: true },
										// { text: 'Is space heating supplied by the hp?0 = no, 1 = yes: ', bold: true },
										// { text: 'Is water heating supplied by the HP?0 = no, 1 = yes: ', bold: true },
										// { text: 'Maximum qualifying heat supplied by the HP: ', bold: true },
										// { text: 'SPF for RHI purposes: ', bold: true },
										// { text: 'Maximum qualifying renewable heat: ', bold: true },
									],
									alignment: 'right',
									fontSize: 9,
									text: 'Left: '
								},
								{
									width: '*',
									stack: [
										{ text: ' ' }, // 0
										{ text: ' ' }, // 1
										{ text: ' ' }, // 2
										{ text: '0' }, // 3
										{ text: '0' }, // 4
										{ text: '0' }, // 5
										{ text: ' ' }, // 6
										{ text: '0' }, // 7
										{ text: '0' }, // 8
										{ text: ' ' }, // 9
										{ text: '0' }, // 10
										{ text: '0' }, // 11
										{ text: '0' }, // 12
										{ text: ' ' }, // 13
										{ text: '7510.01 kWh/yr' }, // 14
										{ text: ' ', bold: true, margin: [0, 10, 30, 10], fontSize: 10 }, // 15
										{ text: ' ' }, // 16
										{ text: 'N/A' }, // 17
										{ text: 'N/A' }, // 18
										{ text: 'N/A' }, // 19
										{ text: ' ' }, // 20
										{ text: ' ' }, // 21
										{ text: ' ' }, // 22
										{ text: '0' }, // 23
										{ text: '0' }, // 24
										{ text: '0' }, // 25
										{ text: '0' }, // 26
										{ text: '0' }, // 27
										{ text: '0' }, // 28
										{ text: '0' }, // 29
										{ text: '0' }, // 30
										{ text: ' ' }, // 31
										{ text: '0' }, // 32
										{ text: '0' }, // 33
										{ text: ' ' }, // 34
										{ text: '0' }, // 35
										{ text: '0' }, // 36
										{ text: '0' }, // 37
										{ text: ' ' }, // 38
										{ text: '0' }, // 39
										{ text: ' ', bold: true, margin: [0, 10, 30, 10], fontSize: 12 }, // 40
										{ text: ' ' }, // 41
										{ text: '0' }, // 42
										{ text: '0' }, // 43
										{ text: '0' }, // 44
										{ text: ' ', bold: true, margin: [0, 10, 30, 10], fontSize: 12 }, // 45
										{ text: ' ' }, // 46
										{ text: ' ' }, // 47
										{ text: ' ' }, // 48
										{ text: '0' }, // 49
										{ text: '0' }, // 50
										{ text: ' ' }, // 51
										{ text: '0' }, // 52
										{ text: ' ' }, // 53
										{ text: '0' }, // 54
										{ text: '0' }, // 55
										{ text: '0' }, // 56
										{ text: ' ', bold: true, margin: [0, 10, 30, 10], fontSize: 11 }, // 57
										{ text: '0' }, // 58
										{ text: '0' }, // 59
										{ text: ' ' }, // 60
										{ text: '0' }, // 61
										{ text: 'N/A' }, // 62
										{ text: ' ', bold: true, margin: [0, 10, 30, 10], fontSize: 10 }, // 63
										// { text: '0 kWh/yr' }, // 64
										// { text: '0 kWh/yr' }, // 65
										// { text: 'NO' }, // 66
										// { text: 'NO' }, // 67
										// { text: '0 kWh/yr' }, // 68
										// { text: '3.6' }, // 69
										// { text: '0  kWh/yr' } // 70
									],
									margin: [5, 0, 0, 0],
									alignment: 'left',
									fontSize: 9,
									text: 'Right'
								}
							],
							margin: [40, 0]
						},
						{ text: 'Disclaimer:', bold: true, fontSize: 8 },
						{ text: '‘The performance of Microgeneration heat pump systems is impossible to predict with certainty due to the variability of the climate and its\n subsequent effect on both heat supply and demand. This estimate is based upon the best available information but is given as guidance only\n and should not be considered as a guarantee.’', fontSize: 8 }
					]
				},
				// PAGE 22
				{ // 21
					pageBreak: 'before',
					pageOrientation: 'portrait',
					stack: [ // content stack
						{ text: 'Appendix P', alignment: 'center', fontSize: 12, bold: true },
						{ text: 'Biomass Summary', alignment: 'center', fontSize: 20, bold: true, margin: [0, 0, 0, 10] },
						{
							columns: [
								{
									width: 5,
									stack: [
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: '101', bold: true },
										{ text: '102', bold: true },
										{ text: '103', bold: true },
										{ text: '104', bold: true },
										{ text: '105', bold: true },
										{ text: '106', bold: true },
										{ text: '107', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: '108', bold: true },
										{ text: '109', bold: true },
										{ text: '110', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: '201', bold: true },
										{ text: '202', bold: true },
										{ text: '203', bold: true },
										{ text: '204', bold: true },
										{ text: '205', bold: true },
										{ text: '206', bold: true },
										{ text: '207', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: '208', bold: true },
										{ text: '209', bold: true },
										{ text: '210', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: '301', bold: true },
										{ text: '302', bold: true },
										{ text: '303', bold: true },
										{ text: '304', bold: true },
										{ text: '305', bold: true },
										{ text: '306', bold: true },
										{ text: '307', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: '401', bold: true },
										{ text: '402', bold: true },
										{ text: '403', bold: true },
										{ text: '404', bold: true },
										{ text: ' ', bold: true },
										{ text: ' ', bold: true },
										{ text: '501', bold: true },
										{ text: '502', bold: true },
										{ text: '503', bold: true },
										{ text: '504', bold: true },
										{ text: '505', bold: true },
									],
									alignment: 'left',
									fontSize: 9,
									text: 'Left: '
								},
								{
									width: '*',
									stack: [
										{ text: 'SPACE HEATING', bold: true, margin: [0, 10, 30, 10], fontSize: 10 },

										{ text: 'Fuel Type: ', bold: true },
										{ text: 'Moisture Content: ', bold: true },
										{ text: 'Gross calorific value (HM) of intended fuel: ', bold: true },
										{ text: 'Bulk Density: ', bold: true },
										{ text: 'Nominal rating of the proposed appliance (Rn): ', bold: true },

										{ text: 'AT THE NOMINAL OUTPUT', bold: true, margin: [0, 10, 30, 10], fontSize: 10 },

										{ text: 'The manufacturers specified efficiency (ηK) as a percentage: ', bold: true },
										{ text: 'The estimated rate of fuel consumption (Mh): ', bold: true },
										{ text: 'The estimated volume of this quantity of fuel (Vh): ', bold: true },

										{ text: 'ANNUAL HEAT DEMAND', bold: true, margin: [0, 10, 30, 10], fontSize: 10 },

										{ text: 'Demand: ', bold: true },
										{ text: 'Proportion of heat to be supplied by BHS (biofuel heating system): ', bold: true },
										{ text: 'Heat supplied by BHS: ', bold: true },
										{ text: 'Seasonal efficiency of the heating system (ηS): ', bold: true },
										{ text: 'Annual fuel requirement (mass) of BHS: ', bold: true },
										{ text: 'Annual fuel requirement (volume) of BHS: ', bold: true },
										{ text: 'Remaining heat to be supplied by other heat sources: ', bold: true },

										{ text: 'WHERE OTHER HEAT SOURCES ARE USED', bold: true, margin: [0, 10, 30, 10], fontSize: 10 },

										{ text: 'Fuel used: ', bold: true },
										{ text: 'Efficiency of other heat sources: ', bold: true },
										{ text: 'Consumed by other heat sources: ', bold: true },

										{ text: 'WATER HEATING', bold: true, margin: [0, 10, 30, 10], fontSize: 10 },

										{ text: 'No. of bedrooms: ', bold: true },
										{ text: 'No of occupants / bedroom: ', bold: true },
										{ text: 'BHS flow temperature in DHW mode: ', bold: true },
										{ text: 'Hot water / occupant: ', bold: true },
										{ text: 'Final BHS secondary HW temperature: ', bold: true },
										{ text: 'Demand:', bold: true },
										{ text: 'Proportion of heat to be supplied by BHS (biofuel heating system): ', bold: true },
										{ text: 'Heat supplied by BHS: ', bold: true },
										{ text: 'Seasonal efficiency of the heating system (ηS): ', bold: true },
										{ text: 'Annual fuel requirement (mass) of BHS: ', bold: true },
										{ text: 'Annual fuel requirement (volume) of BHS:', bold: true },
										{ text: 'Remaining heat to be supplied by other heat sources:', bold: true },

										{ text: 'WHERE OTHER HEAT SOURCES ARE USED', bold: true, margin: [0, 10, 30, 10], fontSize: 10 },

										{ text: 'Fuel used:', bold: true },
										{ text: 'Efficiency of other heat sources:', bold: true },
										{ text: 'Consumed by other heat sources:', bold: true },

										{ text: 'PROPORTIONS, ENERGY CONSUMPTION, AND PERFORMANCE', bold: true, margin: [0, 10, 30, 10], fontSize: 10 },

										{ text: 'Proportion of space heating and water heating demand provided by BHS: ', bold: true },
										{ text: 'Heat supplied by BHS: ', bold: true },
										{ text: 'Seasonal efficiency of the heating system (ηS): ', bold: true },
										{ text: 'Annual fuel requirement (mass) of BHS: ', bold: true },
										{ text: 'Annual fuel requirement (volume) of BHS: ', bold: true },
										{ text: 'Fuel consumed by other heat sources: ', bold: true },

										{ text: 'RUNNING COST', bold: true, margin: [0, 10, 30, 10], fontSize: 10 },

										{ text: 'Cost per unit of biofuel for BHS: ', bold: true },
										{ text: 'Cost per unit of fuel for other heat sources: ', bold: true },
										{ text: 'Cost of biofuel for BHS: ', bold: true },
										{ text: 'Cost of fuel for other heat sources: ', bold: true },

										{ text: 'RHI CALCULATIONS', bold: true, margin: [0, 10, 30, 10], fontSize: 10 },

										{ text: 'Annual space heating demand: ', bold: true },
										{ text: 'Annual water heating demand: ', bold: true },
										{ text: 'Is space heating supplied by the BHS? ', bold: true },
										{ text: 'Is water heating supplied by the BHS? ', bold: true },
										{ text: 'Maximum qualifying heat supplied by the BHS: ', bold: true }
									],
									alignment: 'right',
									fontSize: 9,
									text: 'Left: '
								},
								{
									width: 100,
									stack: [
										{ text: ' ' }, // 0
										{ text: ' ' }, // 1
										{ text: ' ' }, // 2
										{ text: '@' }, // 3
										{ text: '@' }, // 4
										{ text: '@' }, // 5
										{ text: '@' }, // 6
										{ text: '@' }, // 7
										{ text: ' ' }, // 8
										{ text: ' ' }, // 9
										{ text: ' ' }, // 10
										{ text: '@' }, // 11
										{ text: '@' }, // 12
										{ text: '@' }, // 13
										{ text: ' ', bold: true, margin: [0, 10, 30, 10], fontSize: 10 }, // 14
										{ text: '@' }, // 15
										{ text: '100%' }, // 16
										{ text: '@' }, // 17
										{ text: '85%' }, // 18
										{ text: '@' }, // 19
										{ text: '@' }, // 20
										{ text: '@' }, // 21
										{ text: ' ' }, // 22
										{ text: ' ' }, // 23
										{ text: ' ' }, // 24
										{ text: 'N/A' }, // 25
										{ text: 'N/A' }, // 26
										{ text: 'N/A' }, // 27
										{ text: ' ' }, // 28
										{ text: ' ' }, // 29
										{ text: ' ' }, // 30
										{ text: '@' }, // 31
										{ text: '@' }, // 32
										{ text: '70 \u00b0C' }, // 33
										{ text: '@' }, // 34
										{ text: '65 \u00b0C' }, // 35
										{ text: '@' }, // 36
										{ text: '100%' }, // 37
										{ text: '@' }, // 38
										{ text: '85%' }, // 39
										{ text: '@' }, // 40
										{ text: '@' }, // 41
										{ text: '@' }, // 42
										{ text: ' ' }, // 43
										{ text: ' ' }, // 44
										{ text: ' ' }, // 45
										{ text: 'N/A' }, // 46
										{ text: 'N/A' }, // 47
										{ text: 'N/A' }, // 48
										{ text: ' ', bold: true, margin: [0, 10, 30, 10], fontSize: 11 }, // 49

										{ text: '@' }, // 50
										{ text: '@' }, // 51
										{ text: '85%' }, // 52
										{ text: '@' }, // 53
										{ text: '@' }, // 54
										{ text: '0' }, // 55
										{ text: ' ' }, // 56
										{ text: ' ' }, // 57
										{ text: ' ' }, // 58
										{ text: ' ' }, // 59
										{ text: ' ' }, // 60
										{ text: ' ' }, // 61
										{ text: '6' }, // 62
										{ text: ' ' }, // 63
										// { text: ' ' }, // 64
										// { text: ' ' }, // 65
										// { text: 'not available' }, // 66
										// { text: 'not available' }, // 67
										// { text: '1' }, // 68
										// { text: '1' }, // 69
										// { text: 'not available' } // 70
									],
									margin: [5, 0, 0, 0],
									alignment: 'left',
									fontSize: 9,
									text: 'Right'
								}
							],
							margin: [40, 0]
						},
						{ text: '\n\n', bold: true, fontSize: 8 },
						{ text: 'Footnotes:', bold: true, fontSize: 8 },
						{ text: '(1) This should be obtained in accordance with MIS 3004 4.5.1(f), which specifies that it should be taken from the EPC and adjusted for any\n non-standard customer requirements (eg, higher internal temperatures, longer heating hours, high demand for hot water).', fontSize: 8 },
						{ text: '\n', bold: true, fontSize: 8 },
						{ text: '(2) This should be obtained in accordance with MIS 3004 4.5.1(i), which specifies that either SAP Table 4(a) or the SAP seasonal efficiency\n from the Product Characteristics Database should be used as the source. The Product Characteristics Database is online at www.ncm-pcdb.org.uk/sap', fontSize: 8 },
						{ text: '\n', bold: true, fontSize: 8 },
						{ text: 'Disclaimer:', bold: true, fontSize: 8 },
						{ text: '‘The performance of Microgeneration Solid Biofuel Heating Systems is impossible to predict with certainty due to the variability of the climate\n and its subsequent effect on both heat supply and demand. This estimate is based upon the best available information but is given as guidance\n only and should not be considered as a guarantee.’', fontSize: 8 }
					]
				},
							// PAGE 23
				{   // 22
					pageBreak: 'before',
					pageOrientation: 'landscape',
					stack: [ // content stack
						{ text: 'Appendix L', alignment: 'center', fontSize: 12, bold: true },
						{ text: 'New Radiators', alignment: 'center', fontSize: 20, bold: true, margin: [0, 0, 0, 10] },
						{
							style: 'table',
							table: {
								widths: [50, 50, 50, 50, 40, 50, 40, 40, 40, 40, 50, 50, 50, 50],
								body: [
									[
										{ text: 'Room Temperature \u00B0C', rowSpan: 2, margin: [0, 8, 0, 0] },
										{ text: 'Room Names', rowSpan: 2, margin: [0, 8, 0, 0] },
										{ text: 'Room Heat Loss', rowSpan: 2, margin: [0, 8, 0, 0] },
										{ text: 'Radiator Type', rowSpan: 2, margin: [0, 8, 0, 0] },
										{ text: 'Height (mm)', rowSpan: 2, margin: [0, 8, 0, 0] },
										{ text: 'Length (mm)', rowSpan: 2, margin: [0, 8, 0, 0] },
										{ text: 'Output at 50K MW-Air delta T', colSpan: 1, alignment: 'center' },
										{ text: 'Custom defined MWT \u00B0C', colSpan: 1, alignment: 'center', fillColor: 'orange'},
										{ text: 'Mean (Flow/Return) Water Temperature and Outputs', colSpan: 6, alignment: 'center' },
										{}, {}, {}, {}, {}],
									['', '', '', '', '','', '70\u00B0C Watts', 'Output Watts', '35\u00B0C Output Watts', '40\u00B0C Output Watts', '45\u00B0C Output Watts', '50\u00B0C Output Watts', '55\u00B0C Output Watts', '60\u00B0C Output Watts'],
									//['Bedroom', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0']
								]
							}
						}
					]
				},

							// PAGE 24
							{   // 23
								pageBreak: 'before',
								pageOrientation: 'landscape',
								stack: [ // content stack
									{ text: 'Appendix L', alignment: 'center', fontSize: 12, bold: true },
									{ text: 'Room Images', alignment: 'center', fontSize: 20, bold: true, margin: [0, 0, 0, 10] },
									// {
									// 	alignment: 'justify',
									// 	columns: [


									// 	],columnGap: 30
									// },
									// {
									// 	alignment: 'justify',
									// 	columns: [

									// 	],columnGap: 30
									// },
									// {
									// 	columns: [

									// 		[

									// 			{
									// 				columns: [
									// 					{text: 'Lorem. Collegisti, deteriora malint loquuntur officii cotidie  referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'},
									// 					{text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'},
									// 					{text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'},
									// 				]
									// 			},
									// 			{
									// 				columns: [
									// 					{text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'},
									// 					{text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'},
									// 					{text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'},
									// 				]
									// 			}
									// 		],
									// 	]
									// }
									// {
									// 	style: 'tableExample',
									// 	table: {
									// 		body: [
									// 			[	],
									// 			[ ]
									// 		]
									// 	}
									// }
								],

							},
			],
			// styles
			styles: {
				smallGray: {
					fontSize: 9,
					color: '#CCC'
				},
				gray: {
					color: '#CCC'
				},
				table: {
					fontSize: 8
				},
				defaultStyle: {
					columnGap: 20
				}
			}
		});
})();