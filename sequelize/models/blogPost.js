const { DataTypes } = require('sequelize');

const blogPostConfig = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      }, 
      content: {
        allowNull: false,
        type: DataTypes.STRING,
      }, 
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      published: {
        allowNull: false,
        type: DataTypes.DATE,
      }, 
      updated: {
        allowNull: false,
        type: DataTypes.DATE,
      },
};

const BlogPost = (sequelize) => {
    const blogPost = sequelize.define('BlogPost', blogPostConfig,
    {
      tableName: 'BlogPosts',
    });

    blogPost.associate = (models) => {
        blogPost.belongsTo(models.User, { foreingKey: 'userId', as: 'user' });
    };
    return blogPost;
  };
  
  module.exports = BlogPost;