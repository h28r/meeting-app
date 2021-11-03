const  { Sequelize , DataTypes } = require('sequelize');

const sequalize = new Sequelize()

const Meetings = sequalize.define('Meetings',{
    meeting_id:{

    },
    created_at:{

    },
    created_by:{

    },
    scheduled_at:{

    },
    scheduled_by:{

    },
    scheduled_with :{

    },
    link:{
        
    }
})