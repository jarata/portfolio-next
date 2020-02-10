import {Projects} from '../../data/index'

export default (req, res) => {
	res.status(200).json(Projects);
};