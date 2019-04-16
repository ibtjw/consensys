CREATE TABLE consensys_demo.transactions (
	source RAW(16) NOT NULL,
	target RAW(16) NOT NULL,
	amount NUMBER NOT NULL,
	signature NUMBER NOT NULL,
	tx_timestamp TIMESTAMP NOT NULL
);