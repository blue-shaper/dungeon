create table sigs (
    font text not null primary key,
    charset text not null,
    description text not null default '',
    sig_block text,

    check (charset in ('ASCII', 'AOL'))
);
