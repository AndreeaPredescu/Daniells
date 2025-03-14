import React from 'react';
import {
  ContactContainer,
  ContactCard,
  CardTitle,
  CardAddress,
  MapButton,
  ProgramInfo,
  ProgramItem,
  PhoneInfo,
} from './Contact.styled';
import { contacts, formatPhoneNumber } from '../../data/contatcts';

const Contact = () => {
  return (
    <ContactContainer>
      {contacts.map((contact, index) => (
        <ContactCard key={index}>
          <CardTitle>{contact.name}</CardTitle>
          <CardAddress>{contact.address}</CardAddress>
          <ProgramInfo>
            <ProgramItem>Luni - Vineri</ProgramItem>
            <ProgramItem>{contact.weekSchedule}</ProgramItem>
            <ProgramItem>Sâmbătă - Duminică</ProgramItem>
            <ProgramItem>{contact.weekendSchedule}</ProgramItem>
          </ProgramInfo>
          <PhoneInfo href={`tel:${contact.phone}`}>
            Telefon: {formatPhoneNumber(contact.phone)}
          </PhoneInfo>
          <MapButton
            href={contact.mapLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Vezi pe hartă
          </MapButton>
        </ContactCard>
      ))}
    </ContactContainer>
  );
};

export default Contact;
