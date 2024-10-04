// Your API key
        const apiKey = '4f47cfb00a233e58cb67c30e';

        // Fetch the available currencies from the API and populate the dropdown
        async function populateCurrencies() {
            const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                
                if (data.result === 'success') {
                    const currencies = data.conversion_rates;
                    const fromCurrencySelect = document.getElementById('fromCurrency');
                    const toCurrencySelect = document.getElementById('toCurrency');

                    // Populate the currency select boxes with full names
                    for (const [currencyCode, rate] of Object.entries(currencies)) {
                        const optionFrom = document.createElement('option');
                        const optionTo = document.createElement('option');

                        optionFrom.value = currencyCode;
                        optionTo.value = currencyCode;

                        // Here you can provide a full name for each currency code, e.g.:
                        const fullName = getFullCurrencyName(currencyCode); // Get the full name based on the code
                        optionFrom.textContent = `${currencyCode} - ${fullName}`;
                        optionTo.textContent = `${currencyCode} - ${fullName}`;

                        fromCurrencySelect.appendChild(optionFrom);
                        toCurrencySelect.appendChild(optionTo);
                    }
                } else {
                    alert("Error fetching available currencies.");
                }
            } catch (error) {
                alert("Unable to load currencies. Please try again later.");
            }
        }

        // Helper function to get full currency names based on currency codes
        function getFullCurrencyName(code) {
            const currencyNames = {
                "AED": "United Arab Emirates Dirham",
                "AFN": "Afghan Afghani",
                "ALL": "Albanian Lek",
                "AMD": "Armenian Dram",
                "ANG": "Netherlands Antillean Guilder",
                "AOA": "Angolan Kwanza",
                "ARS": "Argentine Peso",
                "AUD": "Australian Dollar",
                "AWG": "Aruban Florin",
                "AZN": "Azerbaijani Manat",
                "BAM": "Bosnia and Herzegovina Convertible Mark",
                "BBD": "Barbadian Dollar",
                "BDT": "Bangladeshi Taka",
                "BGN": "Bulgarian Lev",
                "BHD": "Bahraini Dinar",
                "BIF": "Burundian Franc",
                "BMD": "Bermudian Dollar",
                "BND": "Brunei Dollar",
                "BOB": "Bolivian Boliviano",
                "BRL": "Brazilian Real",
                "BSD": "Bahamian Dollar",
                "BTN": "Bhutanese Ngultrum",
                "BWP": "Botswana Pula",
                "BYN": "Belarusian Ruble",
                "BZD": "Belize Dollar",
                "CAD": "Canadian Dollar",
                "CDF": "Congolese Franc",
                "CHF": "Swiss Franc",
                "CLP": "Chilean Peso",
                "CNY": "Chinese Yuan",
                "COP": "Colombian Peso",
                "CRC": "Costa Rican Colón",
                "CUP": "Cuban Peso",
                "CVE": "Cape Verdean Escudo",
                "CZK": "Czech Koruna",
                "DJF": "Djiboutian Franc",
                "DKK": "Danish Krone",
                "DOP": "Dominican Peso",
                "DZD": "Algerian Dinar",
                "EGP": "Egyptian Pound",
                "ERN": "Eritrean Nakfa",
                "ETB": "Ethiopian Birr",
                "EUR": "Euro",
                "FJD": "Fijian Dollar",
                "FKP": "Falkland Islands Pound",
                "FOK": "Faroese Króna",
                "GBP": "British Pound Sterling",
                "GEL": "Georgian Lari",
                "GGP": "Guernsey Pound",
                "GHS": "Ghanaian Cedi",
                "GIP": "Gibraltar Pound",
                "GMD": "Gambian Dalasi",
                "GNF": "Guinean Franc",
                "GTQ": "Guatemalan Quetzal",
                "GYD": "Guyanese Dollar",
                "HKD": "Hong Kong Dollar",
                "HNL": "Honduran Lempira",
                "HRK": "Croatian Kuna",
                "HTG": "Haitian Gourde",
                "HUF": "Hungarian Forint",
                "IDR": "Indonesian Rupiah",
                "ILS": "Israeli New Shekel",
                "IMP": "Isle of Man Pound",
                "INR": "Indian Rupee",
                "IQD": "Iraqi Dinar",
                "IRR": "Iranian Rial",
                "ISK": "Icelandic Króna",
                "JEP": "Jersey Pound",
                "JMD": "Jamaican Dollar",
                "JOD": "Jordanian Dinar",
                "JPY": "Japanese Yen",
                "KES": "Kenyan Shilling",
                "KGS": "Kyrgyzstani Som",
                "KHR": "Cambodian Riel",
                "KID": "Kiribati Dollar",
                "KMF": "Comorian Franc",
                "KRW": "South Korean Won",
                "KWD": "Kuwaiti Dinar",
                "KYD": "Cayman Islands Dollar",
                "KZT": "Kazakhstani Tenge",
                "LAK": "Lao Kip",
                "LBP": "Lebanese Pound",
                "LKR": "Sri Lankan Rupee",
                "LRD": "Liberian Dollar",
                "LSL": "Lesotho Loti",
                "LYD": "Libyan Dinar",
                "MAD": "Moroccan Dirham",
                "MDL": "Moldovan Leu",
                "MGA": "Malagasy Ariary",
                "MKD": "Macedonian Denar",
                "MMK": "Myanma Kyat",
                "MNT": "Mongolian Tögrög",
                "MOP": "Macanese Pataca",
                "MRU": "Mauritanian Ouguiya",
                "MUR": "Mauritian Rupee",
                "MVR": "Maldivian Rufiyaa",
                "MWK": "Malawian Kwacha",
                "MXN": "Mexican Peso",
                "MYR": "Malaysian Ringgit",
                "MZN": "Mozambican Metical",
                "NAD": "Namibian Dollar",
                "NGN": "Nigerian Naira",
                "NIO": "Nicaraguan Córdoba",
                "NOK": "Norwegian Krone",
                "NPR": "Nepalese Rupee",
                "NZD": "New Zealand Dollar",
                "OMR": "Omani Rial",
                "PAB": "Panamanian Balboa",
                "PEN": "Peruvian Sol",
                "PGK": "Papua New Guinean Kina",
                "PHP": "Philippine Peso",
                "PKR": "Pakistani Rupee",
                "PLN": "Polish Zloty",
                "PYG": "Paraguayan Guarani",
                "QAR": "Qatari Rial",
                "RON": "Romanian Leu",
                "RSD": "Serbian Dinar",
                "RUB": "Russian Ruble",
                "RWF": "Rwandan Franc",
                "SAR": "Saudi Riyal",
                "SBD": "Solomon Islands Dollar",
                "SCR": "Seychellois Rupee",
                "SDG": "Sudanese Pound",
                "SEK": "Swedish Krona",
                "SGD": "Singapore Dollar",
                "SHP": "Saint Helena Pound",
                "SLE": "Sierra Leonean Leone",
                "SLL": "Sierra Leonean Leone",
                "SOS": "Somali Shilling",
                "SRD": "Surinamese Dollar",
                "SSP": "South Sudanese Pound",
                "STN": "São Tomé and Príncipe Dobra",
                "SYP": "Syrian Pound",
                "SZL": "Eswatini Lilangeni",
                "THB": "Thai Baht",
                "TJS": "Tajikistani Somoni",
                "TMT": "Turkmenistani Manat",
                "TND": "Tunisian Dinar",
                "TOP": "Tongan Paʻanga",
                "TRY": "Turkish Lira",
                "TTD": "Trinidad and Tobago Dollar",
                "TVD": "Tuvaluan Dollar",
                "TWD": "New Taiwan Dollar",
                "TZS": "Tanzanian Shilling",
                "UAH": "Ukrainian Hryvnia",
                "UGX": "Ugandan Shilling",
                "UYU": "Uruguayan Peso",
                "UZS": "Uzbekistani Som",
                "VES": "Venezuelan Bolívar Soberano",
                "VND": "Vietnamese Dong",
                "VUV": "Vanuatu Vatu",
                "WST": "Samoan Tala",
                "XAF": "Central African CFA Franc",
                "XCD": "East Caribbean Dollar",
                "XDR": "Special Drawing Rights",
                "XOF": "West African CFA Franc",
                "XPF": "CFP Franc",
                "YER": "Yemeni Rial",
                "ZAR": "South African Rand",
                "ZMW": "Zambian Kwacha",
                "ZWL": "Zimbabwean Dollar"
            };

            return currencyNames[code] || code; // Return the code if name is not found
        }

        // Convert currency
        async function convertCurrency() {
            const amount = document.getElementById('amount').value;
            const fromCurrency = document.getElementById('fromCurrency').value;
            const toCurrency = document.getElementById('toCurrency').value;

            if (amount === "" || isNaN(amount)) {
                alert("Please enter a valid amount");
                return;
            }

            const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

            try {
                const response = await fetch(url);
                const data = await response.json();

                if (data.result === 'success') {
                    const rate = data.conversion_rates[toCurrency];
                    const convertedAmount = (amount * rate).toFixed(2);
                    document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
                } else {
                    alert("Error fetching the exchange rate.");
                }
            } catch (error) {
                alert("Unable to fetch the conversion rate. Please try again later.");
            }
        }

        // Load the currencies when the page loads
        window.onload = populateCurrencies;
