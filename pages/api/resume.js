import {Resume} from '../../data/index'

export default (req, res) => {
	res.status(200).json(Resume);
};