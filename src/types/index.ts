export interface User {
  id: string;
  name: string;
  avatar?: string;
  role: 'admin' | 'staff';
}

export interface Fanpage {
  id: string;
  name: string;
  avatar?: string;
  status: 'connected' | 'disconnected' | 'reauth_required';
  unreadMessages: number;
  lastUpdated: string;
}

export interface FacebookAccount {
  id: string;
  name: string;
  profileUrl?: string;
  status: 'active' | 'expired';
  connectedPages: number;
  lastSync: string;
}

export interface Customer {
  id: string;
  name: string;
  avatar?: string;
  phone?: string;
  email?: string;
  address?: string;
  tags: string[];
}

export interface Conversation {
  id: string;
  fanpageId: string;
  customer: Customer;
  lastMessage: string;
  lastMessageTime: string;
  unread: boolean;
  status: 'open' | 'resolved' | 'spam';
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  senderType: 'customer' | 'page';
  content: string;
  timestamp: string;
  status: 'sent' | 'delivered' | 'read' | 'failed';
}

export interface Post {
  id: string;
  content: string;
  imageUrls: string[];
  fanpageIds: string[];
  status: 'published' | 'scheduled' | 'draft';
  scheduledTime?: string;
  publishedTime?: string;
  likes: number;
  comments: number;
  shares: number;
}
