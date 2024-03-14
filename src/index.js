const fs = require('fs').promises;
const path = require('path');

const devnagariPath = path.resolve(__dirname, 'nepal_data', 'provinces_with_districts_and_municipalities_in_devnagari.json');
const englishPath = path.resolve(__dirname, 'nepal_data', 'provinces_with_districts_and_municipalities.json');

const nepal_province_and_district = (type) => {
    switch (type) {
        case "english":
            return readJson(englishPath);
        case "devnagari":
            return readJson(devnagariPath);
        default:
            return readJson(englishPath);
    }
}

const readJson = async (filePath) => {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        throw error;
    }
}

module.exports = nepal_province_and_district;
