package com.mongodb.talktome.model

import io.realm.kotlin.types.RealmInstant
import io.realm.kotlin.types.RealmObject
import io.realm.kotlin.types.annotations.PrimaryKey
import org.mongodb.kbson.ObjectId

class Talk: RealmObject{
    constructor()
    @PrimaryKey
    var _id: ObjectId = ObjectId()
    //title of this session
    var title: String = ""
    //Speaker name
    var speaker: String =""
    // proposed date is private
    private var proposedDate: RealmInstant = RealmInstant.now()
    // Talk date
    var scheduledDate: RealmInstant?= null
    // create a talk passing in title and speaker's name
    constructor(title: String, speaker:String):this(){
        this.title=title
        this.speaker = speaker
        this.scheduledDate = null
    }
}
