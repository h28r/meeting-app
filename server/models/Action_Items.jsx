const { Sequalize , DataTypes } = require('sequelize');

const sequalize = new Sequalize()

const Action_Items = sequalize.define('Action_Items',{
    action_item_id:{

    },
    email_id:{

    },
    action_item:{

    },
    created_at:{

    },
    created_by:{

    },
    meeting_id:{

    },
    feedback_id:{

    },
    status:{

    }
})