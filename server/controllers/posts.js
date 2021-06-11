import PostModels from '../models/post.js';

export const getPosts = async (req,res) => {
    try {
        const posts = await PostModels.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ error: err});
    }
};  

export const createPosts = async (req,res) => {
    try {
        const newPost = req.body;
        const post = new PostModels(newPost);
        await post.save();

        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ error: err});
    }
};  

export const updatePosts = async (req,res) => {
    try {
        const updatePost = req.body;
        const post = await PostModels.findOneAndUpdate({ _id: updatePost._id}, updatePost, {new: true});
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ error: err});
    }
};  