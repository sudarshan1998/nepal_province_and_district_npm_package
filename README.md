# Nepal GeoData

## Description

Nepal GeoData is a Node.js package that provides geographical data related to Nepal. It includes information about provinces, districts, municipalities, and other administrative divisions in both English and Devanagari scripts.

## Features

- Provides geographical data for provinces, districts, and municipalities in Nepal.
- Supports data retrieval in both English and Devanagari scripts.
- Easy-to-use API for accessing the data programmatically.

## Installation

You can install Nepal GeoData via npm:

```bash
npm install nepal-geodata
Usage
Here's an example of how to use Nepal GeoData in your Node.js project:

javascript
Copy code
const nepalGeoData = require('@utils/nepal-geodata');

// Get provinces with districts and municipalities in English
const englishData = nepalGeoData.main('english');
console.log('English Data:', englishData);

// Get provinces with districts and municipalities in Devanagari
const devanagariData = nepalGeoData.main('devnagari');
console.log('Devanagari Data:', devanagariData);
```

## API Reference
main(type: string): object
This function retrieves geographical data for provinces, districts, and municipalities in Nepal.

type: Specifies the language script of the data. Valid values are "english" and "devnagari".
Returns an object containing the geographical data.

## License
This package is licensed under the MIT License. See the LICENSE file for details.

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on GitHub.

## Acknowledgements
This package was inspired by the need for accessible geographical data for projects related to Nepal. We would like to thank all contributors for their valuable input and support.
