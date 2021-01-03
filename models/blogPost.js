const { Model, Datatypes} = require("sequelize");
const sequelize = require('../config/connection');

class blogPost extends Model { }

BlogPost.init({
    id: {
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    title:{
       type: DataTypes.STRING,
       allowNull:false
    },
    content:{
        type: DataTypes.STRING,
        allowNull:false
    },
    user_id:{
        type:DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
          },
    }
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blog_post',
      }
);


module.exports = BlogPost;