import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xC5e3849A5f6E433b1613AcE6B11FbC99cD3324A7'
);

export default instance;