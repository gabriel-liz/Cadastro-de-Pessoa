CREATE TABLE "public"."pessoa" (
    "uuid" uuid NOT NULL,
    "cpf" character varying(11) NOT NULL,
    "nome" character varying(100) NOT NULL,
    "email" character varying(100),
    "sexo_id" integer NOT NULL,
    "data_nascimento" date NOT NULL,
    "pais_id" character varying(2),
    "naturalidade" character varying,
    "data_criacao" date NOT NULL,
    "data_alteracao" date,
    CONSTRAINT "pessoa_uuid" PRIMARY KEY ("uuid"),
    CONSTRAINT "pessoa_cpf" UNIQUE ("cpf"),
    CONSTRAINT "sexo_id" FOREIGN KEY ("sexo_id") REFERENCES "sexo"("id")
);