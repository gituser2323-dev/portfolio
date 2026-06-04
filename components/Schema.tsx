type SchemaProps = {
  data: object;
};

export default function Schema({
  data
}: SchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data)
      }}
    />
  );
}