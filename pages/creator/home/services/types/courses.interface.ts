export interface ICourse {
    name: string
    creator: string
    duration: number
    subject: string
    tags: string[]
    targetAudience: string[]
    thumbnailUrl: string
    short_desc: string
    creator_email: string
    _creatorId: CreatorId
}

export interface CreatorId {
    $oid: string
}