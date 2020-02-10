import {Skills} from '../../data/index'

export default (req, res) => {
	res.status(200).json(Skills);
};