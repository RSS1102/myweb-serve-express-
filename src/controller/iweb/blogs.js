const { db } = require('../../sql/db/db');
const { QueryTypes } = require('sequelize');
const { Blogs } = require('../../sql/iweb/blogs');
const { BlogNavs } = require('../../sql/cweb/blognavs');
const qs = require('qs')
module.exports = {
    async getBlogMenu(req, res) {
        const BlogMenu = await Blogs.findAll({
            attributes: ['blogNav', 'blogTitle', 'id'],
        });
        const BlogMenuList = Object.create(null);
        BlogMenu.forEach(({
            blogNav,
            blogTitle,
            id
        }) => {
            if (BlogMenuList[blogNav]) {
                BlogMenuList[blogNav].push({ id, blogTitle })

            } else {
                BlogMenuList[blogNav] = [{ id, blogTitle }]
            }
        })
        res.send(BlogMenuList)
    },

    // 查询blogContent
    async getBlogContent(req, res) {
        console.log(res.body)
        let id = req.body.id
        let Content = await Blogs.findAll({
            where: {
                id: id
            }
        });
        res.send(Content[0])
    },

}