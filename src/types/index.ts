export type UserRole = 'super_admin' | 'event_manager' | 'viewer' | 'security_admin';

export interface Profile {
    id: string;
    email: string;
    role: UserRole;
    created_at: string;
    updated_at: string;
}

export type EventStatus = 'draft' | 'scheduled' | 'invitations_sent' | 'rsvp_open' | 'closed' | 'ongoing' | 'completed' | 'archived';

export interface Event {
    id: string;
    title: string;
    description?: string;
    date: string;
    location_name?: string;
    location_url?: string;
    capacity?: number;
    status: EventStatus;
    created_by: string;
    created_at: string;
    updated_at: string;
}

export type RsvpStatus = 'pending' | 'confirmed' | 'declined' | 'waitlist';

export interface Guest {
    id: string;
    event_id: string;
    name: string;
    phone: string;
    email?: string;
    title?: string;
    rsvp_status: RsvpStatus;
    dietary_notes?: string;
    plus_one_count: number;
    check_in_status: boolean;
    check_in_time?: string;
    qr_token: string;
    qr_token_expires_at?: string;
    created_at: string;
    updated_at: string;
}
